import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/javs-profile-image.jpg"
          alt="Image showing Jav"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I'm Jav</h1>
      <p>
        I blog about web development - especially fonrtend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
