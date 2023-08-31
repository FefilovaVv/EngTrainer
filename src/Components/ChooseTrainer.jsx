import { useState } from 'react'
import "./ChooseTrainer.css";
import MyButton from './UI/MyButton/MyButton';


function ChooseTrainer(props) {
  return (
    <>
   <div className='flex-container'>
<h2 className='title'>Выбери тренировку</h2>
<MyButton onClick={()=>props.changePage('rememberOrNot')}>Помню/не помню</MyButton>
   </div>
    </>
  )
}

export default ChooseTrainer
