# spectrum-vue
[![npm version](https://img.shields.io/npm/v/@toshusai%2Fspectrum-vue)](https://www.npmjs.com/package/@toshusai%2Fspectrum-vue)
[![Types](https://img.shields.io/npm/types/@toshusai%2Fspectrum-vue)](https://www.npmjs.com/package/@toshusai%2Fspectrum-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

UI Components for Vue based on [Adobe Spectrum](https://spectrum.adobe.com/) ([spectrum-css](https://github.com/adobe/spectrum-css))

[Document & Demo](https://toshusai.github.io/spectrum-vue/)

__:warning:__ This project is work in progress. Not a stable version. May make breaking changes.

- It was created __"based"__ on Spectrum and is not the same as Spectrum.
- This project was not developed by Adobe.
- Not the same as [React Spectrum](https://github.com/adobe/react-spectrum), [Spectrum Web Components](https://github.com/adobe/spectrum-web-components) API.


## Install
```
yarn add @toshusai/spectrum-vue
```

Register Components to global.
```ts
import * as components from "@toshusai/spectrum-vue"
import Vue from "vue"

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
```

Add global css.  
- `@spectrum-css/vars/dist/spectrum-global.css`
- `@spectrum-css/page`

```html
<html class="spectrum spectrum--medium spectrum--dark" dir="ltr">
    <body class="spectrum-Body"> </body>
</html>
```

# License
MIT


# Development

Serve documents site.
http://localhost:10000/spectrum-vue
```
cd docs
npm install
npm run dev
```

Build and replace dev docs node_modules.
```
npm install
npm run build && rsync dist docs/node_modules/@toshusai/spectrum-vue
```

Generate docs.
Check [scripts/README.md](./scripts/README.md)
```
cd scripts
node generateTemplate.js
```
