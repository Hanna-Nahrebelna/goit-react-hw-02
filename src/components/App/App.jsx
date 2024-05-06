import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx"

import css from "./App.module.css"


export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  }); 
  
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [totalFeedbackState, setTotalFeedbackState] = useState(0);

  useEffect(() => { 
    localStorage.setItem('feedback', JSON.stringify(feedback))
    const total = feedback.good + feedback.neutral + feedback.bad;
    const positive = Math.round((feedback.good / total) * 100);
    setPositiveFeedback(positive || 0);
    setTotalFeedbackState(total > 0);
    if (total === 0) {
      setTotalFeedbackState(0);
    }
  }, [feedback])
  

  const updateFeedback = (feedbackType) => {    
    setFeedback(prevFeedback => {
      const updateClick = { ...prevFeedback };
      updateClick[feedbackType] += 1;
      return updateClick;
    });    
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    setTotalFeedbackState(0);
  };

   
  return (
    <div className={css.container}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedbackProp={totalFeedbackState}
      />

      {totalFeedbackState === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedbackState}
          positiveFeedback={positiveFeedback}
        />
      )}

      
    </div>   
  );
}
