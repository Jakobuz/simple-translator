import React from 'react'
import { Link } from 'gatsby'

function Navigation() {
  return (
    <nav className="py-8 border-r border-gray-300 w-72 mr-12 flex-shrink-0">
      <Link
        className="inline-block bg-indigo-700 px-2 py-1 rounded mb-4 text-white font-semibold text-2xl"
        to="/"
      >
        Simple Translator
      </Link>

      <Link
        className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
        activeClassName="text-indigo-700"
        to="/"
      >
        Home
      </Link>
      <Link
        className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
        activeClassName="text-indigo-700"
        to="/quickstart/"
      >
        Quickstart
      </Link>
      <Link
        className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
        activeClassName="text-indigo-700"
        to="/api/"
      >
        API Reference
      </Link>

      <details className="mt-5">
        <summary className="ml-3 uppercase cursor-pointer font-semibold text-base tracking-wide text-gray-800">
          Tutorial
        </summary>

        <ol>
          <li>
            <Link
              className="block mt-2 px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/introduction/"
            >
              1. Introduction
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/preparing-html/"
            >
              2. Preparing the HTML
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/configuration/"
            >
              3. Configuration
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/resources/"
            >
              4. Preparing Translations
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/translating-html/"
            >
              5. Translating HTML
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/tutorial/translating-javascript/"
            >
              6. Translation in JavaScript
            </Link>
          </li>
        </ol>
      </details>

      <details className="mt-4">
        <summary className="ml-3 uppercase cursor-pointer font-semibold text-base tracking-wide text-gray-800">
          Examples
        </summary>

        <ol>
          <li>
            <Link
              className="block mt-2  px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/examples/javascript"
            >
              Vanilla JavaScript
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/examples/react/"
            >
              ReactJS
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/examples/vue/"
            >
              Vue
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/examples/web-components/"
            >
              Web Components
            </Link>
          </li>
          <li>
            <Link
              className="block px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
              activeClassName="text-indigo-700"
              to="/examples/nodejs/"
            >
              NodeJS
            </Link>
          </li>
        </ol>
      </details>

      <Link
        className="block mt-4 px-3 py-2 hover:text-indigo-700 hover:bg-gray-100"
        activeClassName="text-indigo-700"
        to="/errors/"
      >
        Error References
      </Link>
    </nav>
  )
}

export default Navigation
