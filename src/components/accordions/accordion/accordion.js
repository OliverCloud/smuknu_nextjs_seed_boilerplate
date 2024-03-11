"use client"

import { useState } from 'react';
import styles from './accordion.module.css';
import { FaQuestion } from "react-icons/fa";

const Accordion = ({qna}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
   
        <div className={`${styles.question} ${open ? styles.active : ''}`} onClick={handleClick}>
          
          <div className={styles.icon}>
            <FaQuestion />
          </div>

          <p className={styles.title}>{qna.question}</p>

          <div className={`${styles.answer} ${open ? styles.active : ''}`}>
            <p>{qna.answer}</p>
          </div>

        </div>
    </div>
  );
}
export default Accordion;