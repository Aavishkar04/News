import React, { useState, useEffect } from 'react';
import Lcard from './Lcard';
import { fetchAllNews } from './newsAggregator'

// Helper function to format date in "M/D/YYYY HH:mm" format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format the time with two digits for minutes
  const formattedTime = `${month}/${day}/${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  return formattedTime;
};

const MarketArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllNews().then(data => {
      // Filter out unwanted images and articles with default thumbnails
      const filteredArticles = data.articles.filter((article) => {
        const isValidImage =
          article.imageUrl && 
          !article.imageUrl.includes("marketwatch.com") &&
          !article.imageUrl.includes("https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png") &&
          !article.imageUrl.includes("placeholders");

        // If image is valid, keep it; if not, set image to null
        if (isValidImage) {
          return true;
        } else {
          article.imageUrl = null;  // Remove the image by setting it to null
          return true; // Keep the article
        }
      });

      setArticles(filteredArticles);  // Set filtered articles to state
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <Lcard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          author={article.author}
          urlToImage={article.imageUrl}  // This will be null if no valid image
          publishedAt={formatDate(article.publishedAt)}  // Use the helper function for formatting
        />
      ))}
    </div>
  );
};

export default MarketArticles;
