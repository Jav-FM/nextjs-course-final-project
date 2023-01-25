import { Fragment } from "react";
import classes from "./PostCard.module.css";
import Link from "next/link";
import Image from "next/legacy/image";

const PostCard = ({ post }) => {
  const { title, image, date, description, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <Fragment>
          <div className={classes.image}>
            {image && (
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            )}
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </Fragment>
      </Link>
    </li>
  );
};

export default PostCard;
