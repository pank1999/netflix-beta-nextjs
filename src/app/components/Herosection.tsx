import heroStyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ title, imageUrl }: any) {
  return (
    <main className={heroStyle.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyle.hero_content}>
            <h1>{title}</h1>
            <p className={heroStyle.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nesciunt quisquam, nobis voluptatem ipsam delectus dolorum quasi
              iste est mollitia fugit excepturi expedita ut suscipit
              consectetur? Aspernatur animi excepturi officia.
            </p>
            <Link href="/movie">
              <button>Explore movies</button>
            </Link>
          </div>
          <div className={heroStyle.hero_image}>
            <Image
              src={imageUrl}
              alt="watching movie"
              height={300}
              width={500}
            />
          </div>
        </div>
      </div>
      <div className={heroStyle["custom-shape-divider-bottom-1681647578"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={heroStyle["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
}
