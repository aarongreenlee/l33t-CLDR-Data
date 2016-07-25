// TRANSLATE.JS file
// With support added for L33t
// Based on https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js

import * as fs from 'fs'
import _debug from 'debug'
import {sync as globSync} from 'glob'
import {sync as mkdirpSync} from 'mkdirp'
import Translator from './lib/translator'

const MESSAGES_PATTERN = './src/**/*.i18n.json'
const LANG_DIR = './dist/artifacts/lang/'

const debug = _debug('app:bin:translate')

;(async function() {
  debug('Run translator')

  var counter = 0

  // Aggregates the default messages that were extracted from the example app's
  // React components via the React Intl Babel plugin. An error will be thrown if
  // there are messages in different components that use the same `id`. The result
  // is a flat collection of `id: message` pairs for the app's default locale.
  var defaultMessages = globSync(MESSAGES_PATTERN)
    .map((filename) => { debug('Translator evaluating file:', filename); return filename })
    .map((filename) => fs.readFileSync(filename, 'utf8'))
    .map((file) => {
      try {
        return JSON.parse(file)
      } catch (e) {
        debug('Unable to parse JSON: ', e.message)
        process.exit(1)
      }
    })
    .reduce((collection, descriptors) => {
      for (let k in descriptors) {
        if (collection.hasOwnProperty(k)) {
          throw new Error(`Duplicate message id: ${k}`)
        }
        collection[k] = descriptors[k]
        counter++
      }

      return collection
    }, {})

  // To help with development, English will be translated to L33T. You, being a
  // true programmer should have no trouble understanding this.
  //
  // Credit: http://www.jsoneliners.com/string/convert-a-string-to-leet-l33t/
  var l33tTranslator = new Translator((text) => {
    return text.replace(/[a-z]/g, function fn (a) {
      return '4BCD3F6H1JKLMN0PQR57'[parseInt(a, 36) - 10] || a.replace(/[a-t]/gi, fn)
    })
  })

  var l33tMessages = Object.keys(defaultMessages)
    .map((id) => [id, defaultMessages[id]])
    .reduce((collection, [id, defaultMessage]) => {
      collection[id] = l33tTranslator.translate(defaultMessage)
      return collection
    }, {})

  mkdirpSync(LANG_DIR)

  debug('Collected %s messages', counter)

  debug('Translating en-US')
  fs.writeFileSync(LANG_DIR + 'en-US.json', JSON.stringify(defaultMessages, null, 2))

  debug('Translating lt-US')
  fs.writeFileSync(LANG_DIR + 'lt-US.json', JSON.stringify(l33tMessages, null, 2))
})()
