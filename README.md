# svrf-client - the JavaScript client library for the SVRF API

For more information, please visit [https://github.com/svrf/svrf-api](https://github.com/svrf/svrf-api)

## About SVRF

SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.

The SVRF API Documentation is available at <https://developers.svrf.com>.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install svrf-client --save
```

or:

```shell
yard add svrf-client
```

### For browser

#### Simple way

```html
<script src="https://unpkg.com/svrf-client@2.0.0-alpha/dist/svrf-api.min.js"></script>
```

#### Browserify

TODO: Test it

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

#### Webpack Configuration

TODO: Is it true?

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const SVRF = require('svrf-client');

const api = new SVRF('your API key');

api.authenticate()
  .then(() => api.getTrending())
  .then(({media}) => /* you've got the best of the best media! */)
  .catch((err) => console.error(err));

```

### Storing the app-token

You need to call `api.authenticate()` only once, then we'll do all authentication magic for you! It means you don't have to worry about storing token and checking its expiration time.

If the `localStorage` is available, we save token there. If it's not available (Node.js for example), we save token in memory.

However, you may want us to store the token in some other kind of storage. You can pass an object that implements `get`, `set` and `clear` methods as an additional option:

```javascript
  const options = {
    storage: {
      get() {
        return yourCustomStorage.read();
      },
      set(value) {
        return yourCustomStorage.write(value);
      },
      clear() {
        return yourCustomStorage.clear();
      }
    }
  };

  const api = new SVRF('your API key', options);
```

Note that `set` is gonna be called with an object. And equal object should be returned from the `get` method.
