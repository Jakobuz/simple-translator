import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/button.module.css';

export default ({ children, ...props }) => (
  <Link className={styles.button} {...props}>
    {children}
  </Link>
);
