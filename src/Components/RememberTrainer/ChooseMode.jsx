import classes from "./RememberTrainer.module.css";

function ChooseMode(props) {
  return (
    <>
      <div className={classes.modesFlexContainer}>
        <p>Выбери свой режим</p>
        <select
          name="mode"
          id="mode"
          onChange={(event) => props.onModeChange(event.target.value)}
        >
          <option value="режим">Режим</option>

          <option value="rus">rus</option>
          <option value="eng">eng</option>
        </select>
      </div>
    </>
  );
}

export default ChooseMode;
