import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
export default function MovieCard(movie: any) {
  const { id, type, title, synopsis } = movie.jawSummary;
  console.log({ movie });
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={movie.jawSummary.backgroundImage.url}
          alt={title}
          height={250}
          width={300}
        />
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0, 18)}</h2>
        <p>{synopsis.substring(0, 66)}...</p>
        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}
