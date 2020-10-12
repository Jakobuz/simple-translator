import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

function ApiReference() {
  return (
    <Layout>
      <header className="border-b pb-6 mb-6">
        <h1 className="text-gray-800 font-semibold text-4xl">API Reference</h1>
        <p className="text-gray-600 mt-2 text-xl">
          An overview of all methods and configuration options.
        </p>
      </header>
      <p className="mb-3">
        This API reference will give you an overview of what methods and options
        are available with Simple Translator. If you'd rather have a
        step-by-step guide on how to integrate this library into your app,{' '}
        <Link to="/tutorial/introduction/">see here</Link>.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        new Translator(Object?: options)
      </h2>
      <p className="mb-3">
        Creates a new instance of the translator. You can define multiple
        instances, although this should not be a use-case. Only accepts one
        parameter, a JavaScript `Object`, with a [some custom
        options](#options).
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`import Translator from '@andreasremdt/simple-translator';

var translator = new Translator();
// or...
var translator = new Translator({
...
});`}
        </code>
      </pre>
      <h3>Options</h3>
      <p className="mb-3">
        When initializing the `Translator` class, you can pass an object for
        configuration. By default, the following values apply:
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var translator = new Translator({
  defaultLanguage: 'en',
  detectLanguage: true,
  selector: '[data-i18n]',
  debug: false,
  registerGlobally: '__',
  persist: false,
  persistKey: 'preferred_language',
  filesLocation: '/i18n',
});`}
        </code>
      </pre>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>defaultLanguage</td>
            <td>String</td>
            <td>'en'</td>
            <td>
              The default language, in case nothing else has been specified.
            </td>
          </tr>
          <tr>
            <td>detectLanguage</td>
            <td>Boolean</td>
            <td>true</td>
            <td>
              If set to `true`, it tries to determine the user's desired
              language based on the browser
            </td>
          </tr>
          <tr>
            <td>selector</td>
            <td>String</td>
            <td>'[data-i18n]'</td>
            <td>
              Elements that match this selector will be translated. It can be
              any valid [element
              selector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors).
            </td>
          </tr>
          <tr>
            <td>debug</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              When set to `true`, helpful logs will be printed to the console.
              Valuable for debugging and problem-solving.
            </td>
          </tr>
          <tr>
            <td>registerGlobally</td>
            <td>String or Boolean</td>
            <td>'__'</td>
            <td>
              When set to a `String`, it will create a global helper with the
              same name. When set to `false`, it won't register
            </td>
          </tr>
          <tr>
            <td>persist</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              When set to `true`, the last language that was used is saved to
              localStorage.
            </td>
          </tr>
          <tr>
            <td>persistKey</td>
            <td>String</td>
            <td>'preferred_language'</td>
            <td>
              Only valid when `persist` is set to `true`. This is the name of
              the key with which the last used language is stored in
            </td>
          </tr>
          <tr>
            <td>filesLocation</td>
            <td>String</td>
            <td>'/i18n'</td>
            <td>
              The absolute path (from your project's root) to your localization
              files.
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        translateForKey(String: key, String?: language)
      </h2>
      <p className="mb-3">
        Translates a single translation string into the desired language. If no
        second language parameter is provided, then:
      </p>
      <ul className="list-disc pl-6 my-3">
        <li>
          It utilizes the last used language (accessible via the getter
          `currentLanguage`, but only after calling `translatePageTo()` at least
          once.
        </li>
        <li>
          If no previously used language was set and the `detectLanguage` option
          is enabled, it uses the browser's preferred language.
        </li>
        <li>
          If `detectLanguage` is disabled, it will fall back to the
          `defaultLanguage` option, which by default is `en`.
        </li>
      </ul>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var translator = new Translator({
  defaultLanguage: 'de',
});

translator.translateForKey('header.title', 'en');
// -> translates to English (en)
translator.translateForKey('header.title');
// -> translates to German (de)`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        translatePageTo(String?: language)
      </h2>
      <div>
        Note that this method is only available in the browser and will throw an
        error in Node.js.
      </div>
      <p className="mb-3">
        Translates all DOM elements that match the selector (`'[data-i18n]'` by
        default) into the specified language. If no language is passed into the
        method, the `defaultLanguage` will be used. After this method has been
        called, the `Simple Translator` instance will remember the language and
        make it accessible via the getter `currentLanguage`.
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`
var translator = new Translator({
  defaultLanguage: 'de',
});

translator.translatePageTo('en');
// -> translates the page to English (en)
translator.translatePageTo();
// -> translates the page to German (de)`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        add(String: language, Object: translation)
      </h2>
      <p className="mb-3">
        Registers a new language to the translator. It must receive the language
        as the first and an object, containing the translation, as the second
        parameter. The method `add()` returns the instance of `Simple
        Translator`, meaning that it can be chained.
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`translator
  .add('de', {...})
  .add('es', {...})
  .translatePageTo(...);`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        remove(String: language)
      </h2>
      <p className="mb-3">
        Removes a registered language from the translator. It accepts only the
        language code as a parameter. The method `remove()` returns the instance
        of `Simple Translator`, meaning that it can be chained.
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>{`translator.remove('de');`}</code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        fetch(String|Array: languageFiles, Boolean?: save)
      </h2>
      <p className="mb-3">
        Fetches either one or multiple JSON files from your project by utilizing
        the [Fetch
        API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). By
        default, fetched languages are also registered to the translator
        instance, making them available for use. If you just want to get the
        JSON content, pass `false` as an optional, second parameter. You don't
        have to pass the entire file path or file extension (although you
        could). The `filesLocation` option will determine folder. It's
        sufficient just to pass the language code.
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var translator = new Translator({
  filesLocation: '/i18n'
});

// Fetches /i18n/de.json
translator.fetch('de').then((json) => {
  console.log(json);
});

// Fetches "/i18n/de.json" and "/i18n/en.json"
translator.fetch(['de', 'en']).then(...);

// async/await
// The second parameter is set to \`false\`, so the fetched language
// will not be registered.
await translator.fetch('de', false);`}
        </code>
      </pre>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">
        get currentLanguage
      </h2>
      <p className="mb-3">
        By default, this returns the `defaultLanguage`. After calling
        `translatePageTo()`, this getter will return the last used language.
      </p>
      <pre className="whitespace-pre bg-gray-100 border rounded text-base p-2 my-4">
        <code>
          {`var translator = new Translator({
  defaultLanguage: 'de',
});

console.log(translator.currentLanguage);
// -> "de"

// Calling this methods sets the current language.
translator.translatePageTo('en');

console.log(translator.currentLanguage);
// -> "en"`}
        </code>
      </pre>
    </Layout>
  )
}

export default ApiReference
