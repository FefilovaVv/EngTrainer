
import classes from "./RememberTrainer.module.css";
import MyButton from "../UI/MyButton/MyButton";


function Trainer(props) {
  console.log(props.wordsArray)
  return (
    <>


      <div className={classes.trainerGridContainer}>
        <h2 className={classes.guessWord}>
          {props.wordsArray[props.currentWordIndex]?.word}
        </h2>
        <MyButton onClick={() => props.handleIsThoughtBack(true)}>
          Помню
        </MyButton>
        <MyButton
          onClick={() => {
            props.handleIsThoughtBack(false);
          }}
        >
          Не помню
        </MyButton>
      </div>
    </>
  );
}

export default Trainer;
