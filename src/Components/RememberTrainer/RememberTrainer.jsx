import { useState, useEffect } from "react";
import classes from "./RememberTrainer.module.css";
import animalsDataEng from "./Words/animals_eng.txt";
import animalsDataRus from "./Words/animals_rus.txt";
import { produce } from "immer";
import Trainer from "./Trainer";
import Results from "./Results";
import ChooseMode from "./ChooseMode";

function RememberTrainer(props) {
  const [wordsArray, setWordsArray] = useState([
    { id: 0, word: "", isThoughtBack: null },
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [pageState, setPageState] = useState("mode");
  const [mode, setMode] = useState("режим");

  useEffect(() => {
    mode === "eng" || "rus" ? null : console.log(error);
  }, [mode]);

  const handleIsThoughtBack = (isThoughtBack) => {
    if (currentWordIndex === 3) return setPageState("results");
    setCurrentWordIndex(currentWordIndex + 1);
    setWordsArray((currentWordsArray) =>
      produce(currentWordsArray, (draft) => {
        draft[currentWordIndex].isThoughtBack = isThoughtBack;
      })
    );
    setPageState("trainer");
  };

  const handleChangeMode = (newMode) => {
    fetch(mode === "eng" ? animalsDataEng : animalsDataRus)
      .then((response) => response.text())
      .then((content) => {
        const animalsArray = content.split("\n");
        setWordsArray(
          animalsArray.map((animal) => ({
            id: Math.random(),
            word: animal,
            isThoughtBack: false,
          }))
        );
        setWordsArray((currentArray) =>
          currentArray.sort((a, b) => a.id - b.id)
        );
      });
    setMode(newMode);
    setCurrentWordIndex(0);
    setPageState("trainer");
  };

  switch (pageState) {
    case "trainer":
      setPageState(
        (currentPage) =>
          (currentPage = (
            <Trainer
              wordsArray={wordsArray}
              currentWordIndex={currentWordIndex}
              handleIsThoughtBack={handleIsThoughtBack}
              mode={mode}
              handleChangeMode={handleChangeMode}
            />
          ))
      );
      break;
    case "results":
      setPageState(
        (currentPage) =>
          (currentPage = (
            <Results
              wordsArray={wordsArray}
              setPageState={setPageState}
              setCurrentWordIndex={setCurrentWordIndex}
              mode={mode}
            />
          ))
      );
      break;
    case "mode":
      setPageState(
        (currentPage) =>
          (currentPage = (
            <ChooseMode
              wordsArray={wordsArray}
              setCurrentWordIndex={setCurrentWordIndex}
              handleChangeMode={handleChangeMode}
            />
          ))
      );
      break;
  }
  return (
    <>
      <div className={classes.mainFlexContainer}>
        <h2 className={classes.title}>Помню/не помню</h2>
        {pageState}
      </div>
    </>
  );
}

export default RememberTrainer;
