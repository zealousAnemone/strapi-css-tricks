const Tag = ({ tag }) => {
  return (
    <div className="tag-page">
      <h3>articles tagged</h3>
      <h1>{tag.tagname}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/tags');
  const tags = await response.json();
  return {
    paths: tags.map((tag) => ({
      params: {
        tagname: tag.tagname,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:1337/tags?tagname=${params.tagname}`
  );
  const tags = await response.json();

  return {
    props: { tag: tags[0] },
    revalidate: 1,
  };
}

export default Tag;
