const Author = ({ author }) => {
  return (
    <div className="author-page">
      <img src={`http://localhost:1337${author.photo.url}`} />
      <div className="author-details">
        <h1>{author.name}</h1>
        <p className="bio">{author.bio}</p>
        <p>
          @{author.twitter} - {author.website}
        </p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/authors');
  const authors = await response.json();
  return {
    paths: authors.map((author) => ({
      params: {
        username: author.username,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:1337/authors?username=${params.username}`
  );
  const authors = await response.json();

  return {
    props: { author: authors[0] },
    revalidate: 1,
  };
}

export default Author;
