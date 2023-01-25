import AllPosts from "./AllPosts";

const AllPostsPage = () => {
  const dummyPosts = [
    {
      title: "Dummy post",
      image: "dummy-post.png",
      date: "2023-01-24",
      description:
        "This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post.",
      slug: "dummy-post",
    },
  ];
  return <AllPosts posts={dummyPosts} />;
};

export default AllPostsPage;
