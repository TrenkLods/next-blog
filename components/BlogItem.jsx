import Link from "next/link";

const BlogItem = ({ title, body, id }) => {
  return (
    <>
      <div className="blog-item">
        <h5>{title}</h5>
        <p>{body}</p>
        <div className="linka">
          <Link className='link_text' href="/blog/[id]" as={`/blog/${id}`}>
            Прочитать
          </Link>
        </div>
      </div>
    </>
  );
};
export default BlogItem;
