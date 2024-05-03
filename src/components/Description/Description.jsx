import css from "./Description.module.css"

export default function Description() {
  
  return (    
    <div>
      <h1 className={css.title}>
        <span className={css.titleSpan}>Sip</span> Happens Café
      </h1>      
      <p className={css.description}>
      Please leave your feedback 
        <span className={css.descriptionSpan}> about </span> 
      our service 
      <span className={css.descriptionSpan}> by </span> 
      selecting one 
      <span className={css.descriptionSpan}> of the </span> 
      options 
      <span className={css.descriptionSpan}> below</span>.
      </p>
    </div>
    );
}