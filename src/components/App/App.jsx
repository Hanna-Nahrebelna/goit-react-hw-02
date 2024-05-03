import { useState } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification.jsx"

import css from "./App.module.css"

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  
  return (
    <div className={css.container}>
    <Description />
    <Options  />
    <Feedback />
    <Notification />  
    </div>   
  );
}
