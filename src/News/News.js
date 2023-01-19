import axios from "axios";
import React, { useEffect, useState } from "react";
import "./News.css";

function News({ title, author, content, image }) {
  const [newsData, setNewsData] = useState(null);

  const fetchData = async () => {
    // const data = await axios.get(
    //   "https://newsapi.org/v2/top-headlines?country=in&apiKey=a17bc6ce27b243eb9ab7b70a6cfd0298"
    // );
    const data1 = await axios.get(
      "https://inshorts.deta.dev/news?category=all"
    );

    console.log("log:", data1.data);
    setNewsData(data1.data);
  };

  useEffect(() => {
    fetchData();
    // console.log("log:", newsData);
  }, []);

  return (
    <div className="card-container">
      {newsData &&
        newsData.data.map((item) => (
          <div className="cardbox" key={item.id}>
            <div className="cardbox-left">
              <img className="img1" src={item.imageUrl} alt={item.img} />
            </div>
            <div className="cardbox-right">
              <h2>{item.title}</h2>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default News;
