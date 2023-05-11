import Link from "next/link";
import React from "react";
import styles from "@/app/styles/common.module.css";
export default function NotFound() {
  return (
    <section style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>404</h1>
        <h2>Not Found! </h2>
        <p>Could not found page</p>
        <Link href="/">
          <button>Back to home page</button>
        </Link>
      </div>
    </section>
  );
}
