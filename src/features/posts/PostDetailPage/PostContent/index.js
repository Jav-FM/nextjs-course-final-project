import ReactMarkdown from "react-markdown";
import classes from "./PostContent.module.css";
import PostHeader from "../PostHeader";

const PostContent = () => {
  const dummyPost = {
    title: "Dummy post",
    image: "dummy-post.png",
    date: "2023-01-24",
    description:
      "This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post.",
    slug: "dummy-post",
    content: "# This is a first post",
  };

  const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
