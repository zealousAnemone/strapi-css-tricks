import Link from 'next/link';

const Article = ({ article }) => {
  const date = new Date(article.date).toDateString();
  return (
    <div className="article-full">
      <div className="article-details">
        <h1>{article.title}</h1>
        <p className="article-author">
          <img src={`http://localhost:1337${article.author.photo.url}`} />
          <Link href={`/author/${article.author.username}`}>
            {article.author.name}
          </Link>{' '}
          on {date}
        </p>
      </div>
      <article>{article.content}</article>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/posts');
  const articles = await response.json();
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:1337/posts?slug=${params.slug}`
  );
  const articles = await response.json();

  return {
    props: { article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
