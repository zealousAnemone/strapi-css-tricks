import ArticleCard from '../components/ArticleCard';

export default function Home({ articles }) {
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:1337/posts');
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
}
