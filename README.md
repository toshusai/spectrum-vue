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

Add style.
```js
import "@toshusai/spectrum-vue/dist/index.css",
```

Add global css.  
- `@spectrum-css/vars/dist/spectrum-global.css`

```html
<html class="spectrum spectrum--medium spectrum--dark" dir="ltr">
    <body class="spectrum-Body"> </body>
</html>
```

# 

|                     |                    |
| ------------------- | ------------------ |
| SpAccordion         | :white_check_mark: |
| SpActionBar         | :construction:     |
| SpActionButton      | :white_check_mark: |
| SpActionGroup       | :white_check_mark: |
| SpActionMenu        | :white_check_mark: |
| SpAssetFile         | :white_check_mark: |
| SpAssetFolder       | :white_check_mark: |
| SpAssetImage        | :white_check_mark: |
| SpAssetList         | :construction:     |
| SpAutoComplete      | :construction:     |
| SpAvatar            | :white_check_mark: |
| SpBadge             | :white_check_mark: |
| SpBreadcrumbs       | :white_check_mark: |
| SpBreadcrumbsItem   | :white_check_mark: |
| SpButton            | :white_check_mark: |
| SpButtonGroup       | :white_check_mark: |
| SpCalendar          | :construction:     |
| SpCalendarDate      | :construction:     |
| SpCard              | :construction:     |
| SpCheckbox          | :white_check_mark: |
| SpCoachMark         | :construction:     |
| SpColorArea         | :construction:     |
| SpColorLoupe        | :construction:     |
| SpColorSlider       | :construction:     |
| SpColorWheel        | :construction:     |
| SpCombobox          | :construction:     |
| SpContextMenu       | :construction:     |
| SpDatePicker        | :construction:     |
| SpDial              | :construction:     |
| SpDialog            | :white_check_mark: |
| SpDivider           | :white_check_mark: |
| SpDropIndicator     | :construction:     |
| SpDropzone          | :white_check_mark: |
| SpFieldGroup        | :white_check_mark: |
| SpFieldLabel        | :white_check_mark: |
| SpForm              | :white_check_mark: |
| SpFormItem          | :white_check_mark: |
| SpHelpText          | :white_check_mark: |
| SpHintTextfield     | :construction:     |
| SpIcon              | :white_check_mark: |
| SpInlineAlert       | :white_check_mark: |
| SpItemListItem      | :construction:     |
| SpLink              | :white_check_mark: |
| SpLogicButton       | :white_check_mark: |
| SpMenu              | :white_check_mark: |
| SpMenuDivider       | :white_check_mark: |
| SpMenuItem          | :white_check_mark: |
| SpMenuItemHeader    | :white_check_mark: |
| SpMeter             | :white_check_mark: |
| SpModal             | :white_check_mark: |
| SpPaginationButton  | :white_check_mark: |
| SpPicker            | :white_check_mark: |
| SpPickerButton      | :white_check_mark: |
| SpPopover           | :construction:     |
| SpProgressBar       | :white_check_mark: |
| SpProgressCircle    | :white_check_mark: |
| SpQuickAction       | :white_check_mark: |
| SpRadio             | :white_check_mark: |
| SpSidenav           | :construction:     |
| SpSlider            | :white_check_mark: |
| SpSliderTextfield   | :white_check_mark: |
| SpSplitView         | :white_check_mark: |
| SpSplitViewPane     | :white_check_mark: |
| SpSplitViewSplitter | :white_check_mark: |
| SpTable             | :white_check_mark: |
| SpTabs              | :white_check_mark: |
| SpTag               | :white_check_mark: |
| SpTextArea          | :white_check_mark: |
| SpTextfield         | :white_check_mark: |
| SpToast             | :white_check_mark: |
| SpTreeItem          | :construction:     |
| SpTreeView          | :construction:     |
| SpTreeViewItem      | :construction:     |
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
