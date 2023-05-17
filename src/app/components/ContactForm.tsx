"use client";

import React, { useState } from "react";
import styles from "./../contact/contact.module.css";

export default function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(user);
  };

  const handleSubmit = () => {};
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username">
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email">
          Enter your email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone">
          Enter your phone number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={user.phone}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            rows={5}
            value={user.message}
          />
        </label>
      </div>
      <div>
        <button type="button">Send Message</button>
      </div>
    </form>
  );
}
