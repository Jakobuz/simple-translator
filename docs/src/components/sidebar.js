import React, { useEffect, useState } from 'react';
import styles from '../styles/sidebar.module.css';

function Sidebar({ contentRef }) {
  const [headings, setHeadings] = useState([]);

  function handleClick(evt) {
    evt.preventDefault();

    window.history.pushState({}, '', evt.target.hash);
    document.querySelector(evt.target.hash).scrollIntoView({
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const selector = contentRef?.current?.querySelectorAll(
      'h2, h3, h4, h5, h6'
    );
    const headings = Array.from(selector).map(heading => {
      return {
        text: heading.textContent,
        id: heading.id,
        level: heading.tagName.toLowerCase(),
      };
    });

    setHeadings(headings);
  }, [contentRef]);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Navigation</h3>

      <ul className={styles.list}>
        {headings.map(heading => (
          <li key={heading.text}>
            <a
              className={`${styles.link} ${
                styles['is' + heading.level.toUpperCase()]
              }`}
              onClick={handleClick}
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
