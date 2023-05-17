import React from "react";
import styles from "./../contact/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to friday expected </p>
            <p className={styles.last_para}>Response time 72 hours</p>
            <Link href="/">
              Send Mail <span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9AM to 6PM</p>
            <p className={styles.last_para}>Response time 72 hours</p>
            <Link href="/">
              Chat Now <span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdForum />
            </i>
            <h2>Community Forum</h2>
            <p>Monday to friday expected </p>
            <p className={styles.last_para}>Response time 72 hours</p>
            <Link href="/">
              Ask the community<span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
