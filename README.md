# spectrum-vue

UI Components for Vue based on Adobe Spectrum.

__:warning:__ This project is work in progress. Not a stable version. May make destructive changes.

- It was created __"based"__ on Spectrum and is not the same as Spectrum.
- This project was not developed by Adobe.
- Not the same as `https://github.com/adobe/react-spectrum`, `https://github.com/adobe/spectrum-web-components` API.

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


# License
MIT
