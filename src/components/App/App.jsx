import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx"

import css from "./App.module.css"


const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => { 
    localStorage.setItem('my-feedback', JSON.stringify(feedback))
    console.log('feedback cleanup');
  }, [feedback])
  

  const updateFeedback = (feedbackType) => {
    setFeedback(prevFeedback => {
      const updateClick = { ...prevFeedback };
      updateClick[feedbackType] += 1;
      return updateClick;
      });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);
    
  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback}/>
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      <Notification />  
    </div>   
  );
}

export default App;
