import React from 'react'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import useSiteMetadata from '../hooks/use-sitemetadata'
import 'typeface-source-sans-pro'
import '../css/styles.css'

function Layout({ children }) {
  const { title, description, author } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>

      <div className="container mx-auto px-2 flex h-full">
        <Navigation />

        <main className="py-8 flex-1">{children}</main>
      </div>
    </>
  )
}

export default Layout
