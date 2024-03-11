"use client"

import styles from './form.module.css';
import Success from './feedback/success/success';
import { useEffect, useState } from 'react';

const Form = () => {
  const [members, setMembers] = useState([]);
  const [emailExists, setEmailExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/subscribers')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
  
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    setMember({ name, email, message });

    const memberExists = members.find(member => member.email === email);

    if (memberExists) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
      setSuccess(true);
      await fetch('http://localhost:3000/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      form.reset();

    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='name'>Fulde navn
          <input type="text" id='name' name='name' defaultValue={'John Doe'} required/>
        </label>
        <label htmlFor='email'>E-mail
          <input type="email" id='email' name='email' defaultValue={'example@example.com'} required />
        </label>
        <label htmlFor='message'>Ris og/eller ros
          <textarea id='message' name='message' />
        </label>
        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Jeg accepterer <a href="#">betingelserne</a></label> 

        </div>
        <div className={styles.box}>
          <button type="submit" className={styles.btn}>Opret</button>
          {emailExists ? <p className={styles.error}>Brugeren eksisterer allerede</p> : ''}
        </div>
        
      </form>
      {success ? <Success user={member} /> : ''}
      
    </div>
  );
};

export default Form;
