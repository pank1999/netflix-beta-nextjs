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
            <p>
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
    </main>
  );
}
