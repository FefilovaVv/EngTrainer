import { useState, useEffect } from "react";
import { produce } from "immer";
import animalsDataEng from "./Words/animals_eng.txt";
import animalsDataRus from "./Words/animals_rus.txt";
import Trainer from "./Trainer";
import Results from "./Results";
import ChooseMode from "./ChooseMode";
import classes from "./RememberTrainer.module.css";

function RememberTrainer(props) {
  const [wordsArray, setWordsArray] = useState([
    { id: 0, word: "", isThoughtBack: null },
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [pageState, setPageState] = useState("mode");
  const [mode, setMode] = useState("режим");

  const handleIsThoughtBack = (isThoughtBack) => {
    if (currentWordIndex === 3) {
      setPageState("results");
  
      return;
    }

    setCurrentWordIndex(index => index + 1);
    setWordsArray((currentWordsArray) =>
      produce(currentWordsArray, (draft) => {
        draft[currentWordIndex].isThoughtBack = isThoughtBack;
      })
    );
    setPageState("trainer");
  };

  const handleChangeMode = (newMode) => {
    fetch(newMode === "eng" ? animalsDataEng : animalsDataRus)
      .then((response) => response.text())
      .then((content) => {
        const animalsArray = content.split("\n");

        setWordsArray(
          animalsArray
            .map((animal) => ({
              id: Math.random(),
              word: animal,
              isThoughtBack: false,
            }))
            .sort((a, b) => a.id - b.id)
        );
        setMode(newMode);
        setCurrentWordIndex(0);
        setPageState("trainer");
      });
  };

  const getPageContent = () => {
    switch (pageState) {
      case "trainer":
        return (
          <Trainer
            wordsArray={wordsArray}
            currentWordIndex={currentWordIndex}
            handleIsThoughtBack={handleIsThoughtBack}
            mode={mode}
            handleChangeMode={handleChangeMode}
          />
        );
      case "results":
        return (
          <Results
            words={wordsArray}
            setPageState={setPageState}
            setCurrentWordIndex={setCurrentWordIndex}
            mode={mode}
          />
        );
      case "mode":
        return <ChooseMode onModeChange={handleChangeMode} />;
    }
  };
  return (
    <>
      <div className={classes.mainFlexContainer}>
        <h2 className={classes.title}>Помню/не помню</h2>
        {getPageContent()}
      </div>
    </>
  );
}

export default RememberTrainer;
