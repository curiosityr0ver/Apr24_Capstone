import React, { useEffect, useState } from 'react';
import styles from "./Notes.module.css";

function Notes() {
  const[input,setInput]=useState(
    localStorage.getItem("hi") || null
  )
  const changehandler =(e)=>{
    setInput(e.target.value)
    localStorage.setItem("hi",input)
  }
  useEffect(()=>{
    changehandler
  },[input])
  return (
    <div className={styles.container}>        
      <div className={styles.heading}>
        All Notes
      </div>
      <div className={styles.body}>
        <textarea value={input} onChange={changehandler}></textarea>
      </div>
    </div>
  )
}

export default Notes
