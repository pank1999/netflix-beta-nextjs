import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "2rem" }}>Contact Us</h2>
      <ContactCard />
      <section className={styles.contact_section}>
        <h2>
          We love to here <span>from you </span>
        </h2>
        <ContactForm />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116104.97209136325!2d80.72047403396456!3d24.579518208722615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f12a0d55141%3A0xa6208334386e35e2!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1684345395631!5m2!1sen!2sin"
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        className={styles.mapping}
      ></iframe>
    </div>
  );
}
