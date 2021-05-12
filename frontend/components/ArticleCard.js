const Article = ({ article }) => {
  const date = new Date(article.date).toDateString();
  return (
    <div className="article">
      <div className="cover-image">
        <img src={`http://localhost:1337${article.photo.url}`} />
      </div>
      <div className="article-info">
        {article.tags.map((tag) => (
          <span className="tags">{tag.tagname}</span>
        ))}
        <h2>{article.title}</h2>
        <div className="article-brief">{article.brief}</div>
        <p className="author-info">
          <img src={`http://localhost:1337${article.author.photo.url}`} />
          {article.author.name} on {date}
        </p>
      </div>
    </div>
  );
};

export default Article;
