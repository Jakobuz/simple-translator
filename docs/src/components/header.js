import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/header.module.css';

export default () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.891 17.016h3.234l-1.641-4.359zM18.516 9.984l4.5 12h-2.016l-1.125-3h-4.734l-1.125 3h-2.016l4.5-12h2.016zM12.891 15.047l-0.797 2.063-3.094-3.094-5.016 4.969-1.406-1.406 5.109-5.016q-1.875-2.063-3-4.547h2.016q0.984 1.875 2.297 3.328 2.156-2.391 3.188-5.344h-11.203v-2.016h7.031v-1.969h1.969v1.969h7.031v2.016h-2.953q-0.469 1.5-1.547 3.398t-2.156 3.117l-0.047 0.047z"
          />
        </svg>
        Simple Translator
      </Link>
      <Link
        activeClassName={styles.current}
        className={styles.link}
        to="/guide/"
      >
        Guide
      </Link>
      <Link
        activeClassName={styles.current}
        className={styles.link}
        to="/examples/"
      >
        Examples
      </Link>
      <Link activeClassName={styles.current} className={styles.link} to="/api/">
        API Reference
      </Link>
      <a
        className={styles.link}
        href="https://github.com/andreasremdt/simple-translator"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <svg
          className={styles.github}
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
          />
        </svg>
        GitHub
      </a>
    </div>
  </header>
);
