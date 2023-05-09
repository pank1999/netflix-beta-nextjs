import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brands}>
        <Link href="/">
          <Image src="/logo.png" height={30} width={100} alt="logo" />
        </Link>
      </div>
      <Nav />
    </header>
  );
}
