"use client"
import { useEffect, useState } from "react";
import Accordion from "./accordion/accordion";
import styles from './accordions.module.css';

const Accordions = () => {

  const [qnas, setQnas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
      .then(res => res.json())
      .then(data => setQnas(data));
  }, []);

  console.log(qnas);

  return (
    <div className={styles.container}>

      {qnas.map(qna => (
        <Accordion key={qna._id} qna={qna} />
      ))}
    </div>
  );
}
export default Accordions;