"use client";

import React, { useState } from "react";
import styles from "./../contact/contact.module.css";

export default function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: 0,
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ user });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: 0,
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            onChange={handleChange}
            required
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
            required
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
            onChange={handleChange}
            required
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
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}
