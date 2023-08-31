import { useState, useEffect } from "react";
import classes from "./RememberTrainer.module.css";
import MyButton from "../UI/MyButton/MyButton";
import animalsData from "./Words/animals_eng.txt";
import { produce } from "immer";

function Trainer(props) {
  const [mode, setMode] = useState("rus");
  return (
    <>
      <div className={classes.mainFlexContainer}>
        <h2 className={classes.title}>Помню/не помню</h2>

        <div className={classes.modesFlexContainer}>
          <p>Выбери свой режим</p>
          <select name="mode" id="mode" onChange={(event)=>props.handleChangeMode(event.target.value)
}>
            <option value="eng">eng</option>
            <option value="rus">rus</option>
          </select>
        </div>

        <div className={classes.trainerGridContainer}>
          <h2 className={classes.guessWord}>
            {props.wordsArray[props.currentWordIndex]?.word}
          </h2>
          <MyButton onClick={() => props.handleIsThoughtBack(true)}>
            Помню
          </MyButton>
          <MyButton onClick={() => {props.handleIsThoughtBack(false)
          }}>
            Не помню
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default Trainer;
