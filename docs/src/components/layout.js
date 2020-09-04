import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import useSiteMetadata from '../hooks/use-sitemetadata';
import styles from '../styles/layout.module.css';
import '../styles/global.css';

function Layout({ children, hasSidebar }) {
  const ref = useRef();
  const { title, description, author } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>

      <Header />

      {hasSidebar ? (
        <main className={`${styles.container} ${styles.hasSidebar}`}>
          <Sidebar contentRef={ref} />

          <article ref={ref} className={styles.article}>
            {children}
          </article>
        </main>
      ) : (
        <main className={styles.container}>{children}</main>
      )}

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  hasSidebar: true,
};

export default Layout;
