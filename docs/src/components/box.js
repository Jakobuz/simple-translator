import React from 'react';
import styles from '../styles/box.module.css';

console.log(styles);
function Box({ children, variant }) {
  return <div className={`${styles.box} ${styles[variant]}`}>{children}</div>;
}

Box.defaultProps = {
  variant: 'info',
};

export default Box;
