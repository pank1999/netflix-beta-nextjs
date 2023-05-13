import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
export default async function Movie() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a559f6c54cmsh6cc81f76aa393f6p1fe495jsnb1d9359c586e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  let data = [];
  try {
    const response = await fetch(url!, options);
    const result = await response.json();
    // console.log({ result });
    data = result.titles;
  } catch (error) {
    console.error(error);
  }
  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h2>Series & Movies</h2>
        <div className={styles.card_section}>
          {data.map((movie: any) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </section>
  );
}
