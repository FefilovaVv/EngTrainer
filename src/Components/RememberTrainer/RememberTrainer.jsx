import { useState, useEffect } from "react";
import classes from "./RememberTrainer.module.css";
import MyButton from "../UI/MyButton/MyButton";
import animalsData from "./Words/animals_eng.txt";
import { produce } from "immer";
import Trainer from "./Trainer";
import Results from "./Results";

function RememberTrainer(props) {
  const [wordsArray, setWordsArray] = useState([
    { id: 0, word: "", isThoughtBack: null },
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [pageState, setPageState] = useState("trainer");

  useEffect(() => {
    fetch(animalsData)
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
        console.log(wordsArray);
        setPageState("trainer");
      });
  }, []);

  const handleIsThoughtBack = (isThoughtBack) => {
    if (currentWordIndex === 3) return setPageState("results");
    setCurrentWordIndex(currentWordIndex + 1);
    setWordsArray((currentWordsArray) =>
      produce(currentWordsArray, (draft) => {
        draft[currentWordIndex].isThoughtBack = isThoughtBack;
      })
    );
    setPageState("trainer");
    console.log(currentWordIndex, isThoughtBack);
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
            />
          ))
      );
      break;
    case "results":
      setPageState(
        (currentPage) => (currentPage = <Results wordsArray={wordsArray}
          setPageState={setPageState} 
          setCurrentWordIndex={setCurrentWordIndex}/>)
      );
      break;
  }
  return <>{pageState}</>;
}

export default RememberTrainer;
