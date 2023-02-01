import BlogItem from "../components/BlogItem";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <>
      <Layout title="Главная" posts>
        <h1>Наш блог</h1>
        <div className="posts">
          {posts.map(post => (
            
            <BlogItem key={post.id} title={post.title} body={post.body} id={post.id} />
            
          ))}
        </div>
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: { posts },
  };
};
