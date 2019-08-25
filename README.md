# fbt-easy-setup

Utilities to get you started using [fbt](https://facebookincubator.github.io/fbt/) in your app.

## Prerequisites

fbt-easy-setup the following dependencies to be installed:

```
fbt >=0.9.0
react >=16.8.0
```

## Installation

Using yarn:

```

yarn add fbt-easy-setup --save

```

Using npm:

```

npm install fbt-easy-setup --save

```

## Demo

A demo app could be found [here](demo).

## API

### init

`init` is an enhanced version of fbt's `init` function. Call the init function before you mount the app, eg. using webpack's `entry` option. See [example](demo/src/i18n/init.js).

#### Parameters

**translations**
Your apps translations in the output format of fbt's `/babel-plugin-fbt/bin/translate.js`.

**locales**
Locales in the same format as in fbt's demo app, eg:

```
en_US: {
  bcp47: 'en-US',
  displayName: 'English (US)\u200e',
  englishName: 'English (US)',
  rtl: false,
}
```

**defaultLocale**
Default locale set if not found in storage. Format should be the same format as keys in the `locales` sent in.

**storage** - optional
By default `fbt-easy-setup` is using local storage. Send in your own storage (following the local storage API). This might be useful in order to implement SSR.

### LocaleProvider

Wrap your application with this Provider. See [example](demo/src/index.js).

#### Parameters

**rerender** - optional

By default the app is rerendered using `window.location.reload()` when the locale changes. Set your own rerender logic using the `rerender` prop.

### LocaleConsumer

Get the current `locale` and a locale setter function (`setLocale`) using this context Consumer. See [example](demo/src/components/selectLocale.js).
