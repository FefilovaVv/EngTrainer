
import classes from "./RememberTrainer.module.css";
import MyButton from "../UI/MyButton/MyButton";


function Results(props) {
  return (
    <>
      <div>
        <h2 className={classes.guessWord}>Результаты</h2>
        <div className={classes.flexContainerResults}>
          {props.words.slice(0, 4).map((word) => {
            return (
              <>
                <div key={word.id} className={classes.flexContainerOneResult}>
                  <p key={word.id+1}  className={classes.word}>{word.word}</p>
                  <p key={word.id+2}  className={classes.isThoughtBack}>{`${
                    word.isThoughtBack === true ? "Помню" : "Не помню"
                  }`}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className={classes.flexContainerBtns}>
          <MyButton
            onClick={() => {
              props.setPageState("mode");
              props.setCurrentWordIndex(0);
            }}
          >
            Еще раз
          </MyButton>
          <MyButton>Другая тренировка</MyButton>
        </div>
      </div>
    </>
  );
}

export default Results;
