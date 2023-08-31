import { useState } from 'react'
import classes from "./MyButton.module.css";


function MyButton(props) {

  return (
    <>
   <button className={`${classes.myBtn} ${props.additionalClass}` }onClick={props.onClick}>
{props.children}
   </button>
    </>
  )
}

export default MyButton

