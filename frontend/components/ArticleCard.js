const Article = ({ article }) => {
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.date}</p>
      <p>{article.author.name}</p>
      <p>{article.tags}</p>
    </>
  );
};

export default Article;
