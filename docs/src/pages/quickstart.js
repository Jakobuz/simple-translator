import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

function QuickStart() {
  return (
    <Layout>
      <header className="border-b pb-6 mb-6">
        <h1 className="text-gray-800 font-semibold text-4xl">Quickstart</h1>
        <p className="text-gray-600 mt-2 text-xl">
          Get up and running with Simple Translator in this 5 minute quickstart.
        </p>
      </header>
      <p className="mb-3">
        This quickstart guide will show you the basic usage of Simple
        Translator. If you want to learn more details, head over to the{' '}
        <Link to="/tutorial/introduction/">tutorial</Link>.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        1. Installation
      </h2>
      <p className="mb-3">Simple Translator can be installed via NPM:</p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>{`npm install @andreasremdt/simple-translator`}</code>
      </pre>
      className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4"
      <p className="mb-3">Or, if you prefer yarn:</p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>{`yarn add @andreasremdt/simple-translator`}</code>
      </pre>
      <p className="mb-3">
        If you don't want to install a dependency and prefer to directly load
        Simple Translator in the browser, you can use unpkg:
      </p>
      <pre className="whitespace-pre-wrap bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`<script
  src="https://unpkg.com/@andreasremdt/simple-translator@latest/dist/umd/translator.min.js"
  defer
></script>`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        2. Initialization
      </h2>
      <p className="mb-3">
        Import the `Translator` class into your JavaScript file. Depending on
        your project and use-case, you can either use UMD or CommonJS.
      </p>
      <pre className="whitespace-pre-wrap bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`import Translator from '@andreasremdt/simple-translator'
// or
var Translator = require('@andreasremdt/simple-translator')`}
        </code>
      </pre>
      <p className="mb-3">
        If you loaded the library via unpkg, you can skip this step.
      </p>
      <p className="mb-3">
        Initialize the translator and provide some options to configure its
        behavior. You don't need to pass any configuration, the default options
        will be used instead.
      </p>
      <pre className="whitespace-pre-wrap bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var translator = new Translator({
  ...options,
});`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        3. Preparing the HTML
      </h2>
      <p className="mb-3">
        Add `data-i18n` attributes to all HTML elements that you want to
        translate.
      </p>
      <pre className="whitespace-pre-wrap bg-gray-100 border rounded text-base p-2 my-4">
        <code>{`<p data-i18n="header.title"></p>`}</code>
      </pre>
      <p className="mb-3">
        This will replace the `textContent` of the paragraph with whatever your
        translation file includes.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        4. Translating the HTML
      </h2>
      <p className="mb-3">
        Finally, you can use the API to add languages and translate the HTML
        page.
      </p>
      <pre className="whitespace-pre-wrap bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var germanTranslation = {
  header: {
    title: 'Eine Überschrift'
  }
};

translator.add('de', germanTranslation).translatePageTo('de')`}
        </code>
      </pre>
    </Layout>
  )
}

export default QuickStart
