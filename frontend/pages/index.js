import fetchQuery from '../utils';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
  return (
    <div>
      <h1>Posts</h1>
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
