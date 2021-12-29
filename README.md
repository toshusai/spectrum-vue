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
import "@toshusai/spectrum-vue/dist/index.css"
```

Add global css.  
- `@spectrum-css/vars/dist/spectrum-global.css`

```html
<html class="spectrum spectrum--medium spectrum--dark" dir="ltr">
    <body class="spectrum-Body"> </body>
</html>
```

# 

|                   |                    |
| ----------------- | ------------------ |
| Accordion         | :white_check_mark: |
| ActionBar         | :construction:     |
| ActionButton      | :white_check_mark: |
| ActionGroup       | :white_check_mark: |
| ActionMenu        | :white_check_mark: |
| AssetFile         | :white_check_mark: |
| AssetFolder       | :white_check_mark: |
| AssetImage        | :white_check_mark: |
| AssetList         | :construction:     |
| AutoComplete      | :construction:     |
| Avatar            | :white_check_mark: |
| Badge             | :white_check_mark: |
| Breadcrumbs       | :white_check_mark: |
| BreadcrumbsItem   | :white_check_mark: |
| Button            | :white_check_mark: |
| ButtonGroup       | :white_check_mark: |
| Calendar          | :construction:     |
| CalendarDate      | :construction:     |
| Card              | :construction:     |
| Checkbox          | :white_check_mark: |
| CoachMark         | :construction:     |
| ColorArea         | :construction:     |
| ColorLoupe        | :construction:     |
| ColorSlider       | :construction:     |
| ColorWheel        | :construction:     |
| Combobox          | :construction:     |
| ContextMenu       | :construction:     |
| DatePicker        | :construction:     |
| Dial              | :construction:     |
| Dialog            | :white_check_mark: |
| Divider           | :white_check_mark: |
| DropIndicator     | :construction:     |
| Dropzone          | :white_check_mark: |
| FieldGroup        | :white_check_mark: |
| FieldLabel        | :white_check_mark: |
| Form              | :white_check_mark: |
| FormItem          | :white_check_mark: |
| HelpText          | :white_check_mark: |
| HintTextfield     | :construction:     |
| Icon              | :white_check_mark: |
| InlineAlert       | :white_check_mark: |
| ItemListItem      | :construction:     |
| Link              | :white_check_mark: |
| LogicButton       | :white_check_mark: |
| Menu              | :white_check_mark: |
| MenuDivider       | :white_check_mark: |
| MenuItem          | :white_check_mark: |
| MenuItemHeader    | :white_check_mark: |
| Meter             | :white_check_mark: |
| Modal             | :white_check_mark: |
| PaginationButton  | :white_check_mark: |
| Picker            | :white_check_mark: |
| PickerButton      | :white_check_mark: |
| Popover           | :construction:     |
| ProgressBar       | :white_check_mark: |
| ProgressCircle    | :white_check_mark: |
| QuickAction       | :white_check_mark: |
| Radio             | :white_check_mark: |
| Sidenav           | :construction:     |
| Slider            | :white_check_mark: |
| SliderTextfield   | :white_check_mark: |
| SplitView         | :white_check_mark: |
| SplitViewPane     | :white_check_mark: |
| SplitViewSplitter | :white_check_mark: |
| Table             | :white_check_mark: |
| Tabs              | :construction:     |
| Tag               | :white_check_mark: |
| TextArea          | :white_check_mark: |
| Textfield         | :white_check_mark: |
| Toast             | :white_check_mark: |
| TreeItem          | :construction:     |
| TreeView          | :construction:     |
| TreeViewItem      | :construction:     |

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
