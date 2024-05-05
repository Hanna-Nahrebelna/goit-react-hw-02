// import css from "./Options.module.css"


const Options = ({updateFeedback, handleReset}) => {    

  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Options