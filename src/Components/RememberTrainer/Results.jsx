import { useState, useEffect } from "react";
import classes from "./RememberTrainer.module.css";
import MyButton from "../UI/MyButton/MyButton";
import animalsData from "./Words/animals_eng.txt";
import { produce } from "immer";
import Trainer from "./Trainer";

function Results(props) {
  return (
    <>
      <div className={classes.mainFlexContainer}>
        <h2 className={classes.title}>Помню/не помню</h2>

        <div className={classes.trainerGridContainer}>
          <h2 className={classes.guessWord}>Результаты</h2>
          <div className={classes.flexContainerResults}>
            {props.wordsArray.slice(0, 4).map((word) => {
              console.log(word.isThoughtBack);
              return (
                <>
                  <div key={word.id} className={classes.flexContainerOneResult}>
                    <p className={classes.word}>{word.word}</p>
                    <p
                      className={classes.isThoughtBack}
                    >{`${word.isThoughtBack===true?'помню':'не помню'}`}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className={classes.flexContainerBtns}>
            <MyButton>Еще раз</MyButton>
            <MyButton>Другая тренировка</MyButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
