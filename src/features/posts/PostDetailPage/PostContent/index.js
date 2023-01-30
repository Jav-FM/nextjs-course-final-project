import ReactMarkdown from "react-markdown";
import PostHeader from "../PostHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Text } from "@chakra-ui/react";
import CustomImage from "../../../../shared/components/CustomImage";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    h2(title) {
      return (
        <Text fontWeight="bold" marginY={4} fontSize="2xl">
          {title.children}
        </Text>
      );
    },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <Box marginBottom={2}>
            <CustomImage
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
              layout="responsive"
            />
          </Box>
        );
      }
      return <Text marginBottom={2}>{paragraph.children}</Text>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          children={children}
        />
      );
    },
  };

  return (
    <Box
      width="95%"
      maxWidth="60rem"
      marginY={5}
      marginX="auto"
      fontSize="xl"
      backgroundColor="gray.200"
      borderRadius="6px"
      padding={8}
    >
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </Box>
  );
};

export default PostContent;

// margin: var(--size-4) auto;
// width: 100%;
// max-width: 600px;
