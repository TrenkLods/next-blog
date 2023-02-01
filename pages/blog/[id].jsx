import { Router } from "next/router";
import Layout from "../../components/layout";

const SinglPost = ({ post }) => {
  if (!post) return "404";

  return (
    <>
      <Layout title={post.title} description={post.body}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </Layout>
    </>
  );
};
export const getServerSideProps = async ({ query }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = await data.json();

  return {
    props: { post },
  };
};
export default SinglPost