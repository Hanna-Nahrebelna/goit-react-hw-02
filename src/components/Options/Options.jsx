import css from "./Options.module.css"

const Options = ({ updateFeedback, handleReset }) => { 
  return (
    <div>
      <button className={css.optionsButton} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.optionsButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.optionsButton} onClick={() => updateFeedback('bad')}>Bad</button>
      <button className={css.optionsButton} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Options