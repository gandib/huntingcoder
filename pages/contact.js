import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, desc)
        const data = { name, email, phone, desc }

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                alert("Thanks for contacting us");
                setName('');
                setEmail('');
                setPhone('');
                setDesc('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value);
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value);
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value);
        }
        console.log(e, "change")
    }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formLabel}>Enter Your Name</label>
                    <input type="text" className={styles.input} id="name" name='name' value={name} onChange={handleChange} aria-describedby="emailHelp" required />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                    <input type="email" className={styles.input} id="email" name='email' value={email} onChange={handleChange} aria-describedby="emailHelp" required />
                    <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                    <input type="text" className={styles.input} id="phone" name='phone' value={phone} onChange={handleChange} required />
                </div>
                <div className={styles.mb3}>
                    <label className={styles.formLabel} htmlFor="floatingTextarea">Elaborate your concern</label>
                    <textarea className={styles.input} id="desc" name='desc' value={desc} onChange={handleChange} required />
                </div>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact