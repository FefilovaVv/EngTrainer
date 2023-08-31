import { useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import classes from "./UI/MyButton/MyButton.module.css";

function MainPage(props) {

  return (
    <>
    <div className='pageTitle-flex-container'>
    <div className='pageTitle-grid-container'>
    <MyButton onClick={()=>props.changePage('learn')}>Учить</MyButton>
    <MyButton onClick={()=>props.changePage('read')}>Читать</MyButton>
    <MyButton additionalClass={classes.big} onClick={()=>props.changePage('vocabulary')}>Словарь</MyButton>
    </div>
    </div>
    </>
  )
}

export default MainPage
