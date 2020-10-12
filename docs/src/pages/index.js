import React from 'react'
import Layout from '../components/layout'

function Home() {
  return (
    <Layout>
      <header className="border-b pb-6 mb-6">
        <h1 className="text-gray-800 font-semibold text-4xl">Introduction</h1>
        <p className="text-gray-600 mt-2 text-xl">
          Explore Simple Translator and learn how to translate your websites.
        </p>
      </header>

      <p className="mb-3">
        Welcome! You are on the official documentation for Simple Translator, a
        JavaScript library that helps you translate your websites with ease.
      </p>

      <p>With Simple Translator, you can:</p>

      <ul className="list-disc pl-6 my-3">
        <li>Translate single strings in JavaScript</li>
        <li>Translate entire HTML pages</li>
        <li>Easily fetch JSON resource files (containing your translations)</li>
        <li>Make use of global helper functions for quick translations</li>
        <li>Detect the user's preferred language automatically</li>
        <li>Use fallback languages</li>
      </ul>

      <p>
        All of that and even more! Simple Translator is a very lightweight (~9
        KB minified) JavaScript library available on NPM and works natively in
        the browser and Node.js.
      </p>
    </Layout>
  )
}

export default Home
