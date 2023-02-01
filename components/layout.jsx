import Link from "next/link";
import Head from "next/head";

const layout = ({ title, description = "", children }) => {
  return (
    <>
      <Head>
        <title>{title}||simmpl blog</title>

        <meta name="description" content={description || "простой блог"} />
        <meta
          property="og:description"
          content={description || "простой блог"}
        />
      </Head>

      <header>
        <Link href="/">Главная </Link>
        <img src="/favicon.ico" alt="icon logo" />
      </header>
      <div className="container">{children}</div>
      <footer>2023 &copy; Simple blog NEXT.JS</footer>
    </>
  );
};
export default layout;
