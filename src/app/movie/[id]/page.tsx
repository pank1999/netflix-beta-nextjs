import Image from "next/image";
import styles from "@/app/styles/common.module.css";

export default async function page({ params }: any) {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lng=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a559f6c54cmsh6cc81f76aa393f6p1fe495jsnb1d9359c586e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  let data: any;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    data = result[0].details;
  } catch (error) {
    console.error(error);
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{data.type}</span>{" "}
      </h2>
      <div className={styles.card_section}>
        <div className={styles.card_image}>
          <Image
            src={data.backgroundImage.url}
            alt={data.title}
            width={600}
            height={300}
          />
        </div>
        <div>
          <h2>{data.title}</h2>
          <p>{data.synopsis}</p>
        </div>
      </div>
    </div>
  );
}
