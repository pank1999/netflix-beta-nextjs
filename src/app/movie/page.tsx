import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
export default async function Movie() {
  const url = process.env.RAPID_URL;

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
      <h1>Series & Movies</h1>
      <div
        className={styles.container}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data.map((movie: any) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}
