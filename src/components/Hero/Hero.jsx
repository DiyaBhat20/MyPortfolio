import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Diya Bhat</h1>
        <p className={styles.description}>
          I'm a full-stack developer currently working in a start up. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:diyabhat427@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/images/diya.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
