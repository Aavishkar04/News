// newsAggregator.js
import axios from "axios";

const SERVER_URL = "http://localhost:3001";

async function fetchAllNews() {
  try {
    // Fetch from all three APIs
    const [finnhubResponse, newsApiResponse, newsDataResponse] = await Promise.all([
      axios.get("https://finnhub.io/api/v1/news?category=general", {
        params: { token: "ctttqjhr01qi2rq60bc0ctttqjhr01qi2rq60bcg" }
      }),
      axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=9507666744df4529a071f09750d0e137"),
      axios.get("https://newsdata.io/api/1/latest?apikey=pub_645612653eecd6521e4735619a882c2b502aa&q=pizza")
    ]);
    console.log('Data fetched:', {
        finnhub: finnhubResponse.data,
        newsApi: newsApiResponse.data,
        newsData: newsDataResponse.data,
      });

    const combinedData = {
      lastUpdated: new Date().toISOString(),
      articles: [
        ...finnhubResponse.data.map(article => ({
          source: 'finnhub',
          title: article.headline,
          description: article.summary,
          url: article.url,
          imageUrl: article.image,
          author: article.source,
          publishedAt: new Date(article.datetime * 1000).toISOString()
        })),
        ...newsApiResponse.data.articles.map(article => ({
          source: 'newsapi',
          title: article.title,
          description: article.description,
          url: article.url,
          imageUrl: article.urlToImage,
          author: article.author,
          publishedAt: article.publishedAt
        })),
        ...newsDataResponse.data.results.map(article => ({
          source: 'newsdata',
          title: article.title,
          description: article.description,
          url: article.link,
          imageUrl: article.image_url,
          author: article.creator,
          publishedAt: article.pubDate
        }))
      ]
    };

    // Save to local file via backend
    await axios.post(`${SERVER_URL}/save-news`, combinedData);
    return combinedData;
  } catch (error) {
    console.error('Error:', error);
    // Fetch from local storage if API calls fail
    const response = await axios.get(`${SERVER_URL}/get-news`);
    return response.data;
  }
}

export { fetchAllNews };