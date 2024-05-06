import css from "./Feedback.module.css"


const Feedback = ({ feedback, totalFeedbackState, positiveFeedback }) => {   

  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedbackState}</li>
        <li>Positive: {positiveFeedback} %</li>
      </ul>
    </div>
  );
}

export default Feedback;
