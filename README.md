# spectrum-vue

UI Components for Vue based on [Adobe Spectrum](https://spectrum.adobe.com/) ([spectrum-css](https://github.com/adobe/spectrum-css))

[Document & Demo](https://toshusai.github.io/spectrum-vue/)

__:warning:__ This project is work in progress. Not a stable version. May make destructive changes.

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


```
npm run build && rsync dist docs/node_modules/@toshusai/spectrum-vue
```