import React from 'react';
import styles from './ContactMeComponent.module.css';

function ContactMeComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.contactInfo}>
                    <h1>Contact Me</h1>
                    <p>Email: zandermarenberg@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <br />
                <div className={styles.form}>
                    <p>Or leave a message:</p>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMeComponent;
