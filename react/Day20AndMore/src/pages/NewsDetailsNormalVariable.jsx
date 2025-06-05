import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const style = {
  border: "1px solid red",
  padding: "10px",
  borderRadius: "10px",
  margin: "10px",
};

export const _news = {
  title: "News Title Normal",
  content: "News Content",
  date: "2025-01-01",
  author: "John Doe",
  image: "https://placehold.co/600x400",
  link: "https://www.google.com",
};

export default function NewsDetails() {
  const { year, month, day } = useParams();
  const [news, setNews] = useState(_news);

  useEffect(() => {
    setNews({
      ...news,
      title: "Updated News Title Normal",
    });
  }, []);

  return (
    <div style={style}>
      <h1>Read News</h1>
      <NewsCard news={news} />
    </div>
  );
}

function NewsCard({ news }) {
  return (
    <div style={style}>
      <div style={style}>
        <NewsTitle title={news.title} />
      </div>
      <div style={style}>
        <NewsPoster image={news.image} />
      </div>
      <div style={style}>
        <NewsContent news={news} />
      </div>
    </div>
  );
}

function NewsTitle({ title }) {
  return <h2>{title}</h2>;
}

function NewsPoster({ image }) {
  return (
    <div>
      <img src={image} />
    </div>
  );
}

function NewsContent({ news }) {
  return (
    <div>
      <p>{news.content}</p>
      <a href={news.link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
}
