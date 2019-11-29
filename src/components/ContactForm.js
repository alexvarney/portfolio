import React from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    return (
        <form action="https://formspree.io/mbjldqvn" method="POST" className={styles.formStyle}>
            <h3>Send me a message!</h3>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="_replyto" placeholder="you@example.com" />
            <textarea name="message" placeholder="Your message here..."/>
            <button type="submit">Submit</button>
        </form>
    )
}
