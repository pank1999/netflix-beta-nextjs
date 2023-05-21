import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={styles.main_header} style={{ height: "100px" }}>
      <div className={styles.navbar_brands}>
        <Link href="/">
          <h2>
            {" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              Netflix
            </span>{" "}
            Beta
          </h2>
        </Link>
      </div>
      <Nav />
    </header>
  );
}
