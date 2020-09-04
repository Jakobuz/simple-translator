import React from 'react';
import Button from './button';
import styles from '../styles/hero.module.css';

export default () => (
  <section className={styles.wrapper}>
    <h1 className={styles.title}>Simple and painless translations</h1>
    <p className={styles.subtitle}>
      Translate entire HTML pages or single strings in the browser or in Node.js
      with an intuitive API. Want a real-world demo? Translate this page now:
    </p>
    <Button to="/guide/">Get Started &rarr;</Button>
  </section>
);
