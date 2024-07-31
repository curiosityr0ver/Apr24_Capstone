import { useEffect, useState } from "react";
import fetchNews from "../api/fetchNews";
import styles from "./NewsWidget.module.css";

function NewsWidget() {
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status === "ok") {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex]);
      }
    });
  }, []);

  console.log(news);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={news?.urlToImage} />
        <div className={styles.heading}>
          <p>{news?.title}</p>
          <p>
            {news?.publishedAt
              ? new Date(news.publishedAt).toLocaleString()
              : ""}
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{news?.description}</p>
      </div>
    </div>
  );
}

export default NewsWidget;
