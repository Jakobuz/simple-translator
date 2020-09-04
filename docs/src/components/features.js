import React from 'react';
import styles from '../styles/features.module.css';

export default () => (
  <section className={styles.wrapper}>
    <article className={styles.feature}>
      <h3>Lightweight & Focused</h3>
      <p>
        With ~9 KB of minified file size, this library focuses on the important
        stuff and doesn't come with any bloat.
      </p>
    </article>

    <article className={styles.feature}>
      <h3>Universal</h3>
      <p>
        The API can be used in many browsers with popular frameworks like React
        or even in Node.js applications on the server.
      </p>
    </article>

    <article className={styles.feature}>
      <h3>Customizable</h3>
      <p>
        Simple Translator can be customized by providing options for languages,
        element selectors, global helpers and even more.
      </p>
    </article>
  </section>
);
