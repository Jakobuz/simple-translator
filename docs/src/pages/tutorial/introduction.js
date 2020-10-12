import React from 'react'
import Layout from '../../components/layout'

function Introduction() {
  return (
    <Layout>
      <header className="border-b pb-6 mb-6">
        <h1 className="text-gray-800 font-semibold text-4xl">
          1. Introduction
        </h1>
        <p className="text-gray-600 mt-2 text-xl">
          Learn how to use Simple Translator in every possible use-case.
        </p>
      </header>
      <p className="mb-3">
        Welcome! This tutorial guides you through building a simple website,
        translated by Simple Translator. We'll take a look at all of the
        use-cases Simple Translator can handle and explain how to use the API,
        along as some best-practices.
      </p>

      <p className="mb-3">Ready? Let's dive in!</p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        Prerequisites
      </h2>

      <p className="mb-3">
        This tutorial assumes that you're familiar with JavaScript and HTML,
        ideally also with Node.js.
      </p>

      <p className="mb-3">
        If you've never worked with these things before, we recommend that step
        back and walk through a tutorial on basic web development first.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        System requirements
      </h2>

      <ul className="list-disc pl-6 my-3">
        <li>Node.js v8.x or later</li>
        <li>npm v6.x or later</li>
        <li>A text editor of your choice, like VS Code or Sublime Text</li>
      </ul>
    </Layout>
  )
}

export default Introduction
