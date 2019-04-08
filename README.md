# svrf-client - the JavaScript client library for the Svrf API

For more information, please visit [https://github.com/svrf/svrf-api](https://github.com/svrf/svrf-api)

## About Svrf

Svrf's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.

The Svrf API Documentation is available at <https://developers.svrf.com>.

## [Api Reference](https://github.com/Svrf/svrf-javascript-client/blob/master/docs/Api.md)

## Installation

Using npm:

```shell
npm install svrf-client@beta --save
```

Using yarn:

```shell
yarn add svrf-client@beta
```

Using CDN:
```html
<script src="https://unpkg.com/svrf-client@beta"></script>
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const Svrf = require('svrf-client');

const api = new Svrf('your API key');

api.media.getTrending()
  .then(({media}) => /* you've got the best of the best media! */)
  .catch((err) => console.error(err));

```

### Enums

You don't have to remember or enums values for categories, stereoscopic and media types. You can access them with static `enums` property:

```javascript
const Svrf = require('svrf-client');

const api = new Svrf('your API key');

api.media.getTrending({type: Svrf.enums.mediaType.PHOTO})
  .then(({media}) => /* only photos are here */)
  .catch((err) => console.error(err));
```

### Authentication

Once you create `Svrf` instance, it sends authentication request. Don't worry, we'll handle storing retrieved token and checking its expiration time.

However, you may want to postpone initial authentication request. In that case you need to pass `isManualAuthentication: true` option and then call `api.authenticate()` manually whenever you want:

```javascript
const Svrf = require('svrf-client');

const api = new Svrf('your API key', {isManualAuthentication: true});

// Let's say we know that user is IDLE and we have time to make auth request.
api.authenticate();

api.media.getTrending()
  .then(({media}) => /* you've got the best of the best media! */)
  .catch((err) => console.error(err));
```

### Storing the app-token

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

  const api = new Svrf('your API key', options);
```

Note that `set` is gonna be called with an object. And equal object should be returned from the `get` method.

## IE support

The library uses promises which are not supported by IE11. If you want to support it you have to use a polyfill (for example [es6-promise](https://github.com/stefanpenner/es6-promise))
