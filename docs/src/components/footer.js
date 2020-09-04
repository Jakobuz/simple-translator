import React from 'react';
import styles from '../styles/footer.module.css';

export default () => (
  <footer className={styles.footer}>
    <p>
      Copyright &copy; {new Date().getFullYear()} by Andreas Remdt. Made with
      Gatsby and proudly hosted on Netlify.{' '}
      <a
        className={styles.link}
        href="https://github.com/andreasremdt/simple-translator"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        GitHub
      </a>
    </p>
  </footer>
);
