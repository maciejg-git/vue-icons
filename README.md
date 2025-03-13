# Vue-icons

![GitHub License](https://img.shields.io/github/license/maciejg-git/vue-icons)
![GitHub package.json version](https://img.shields.io/github/package-json/v/maciejg-git/vue-icons)

Bootstrap icons, Material Design Icons, Font Awesome and Heroicons converted to unified, self contained Vue 3 components. 

All icons from this project can be viewed and downloaded from the [Vue Icon Browser](https://vue-icon-browser.netlify.app/).

## Usage

**[Option 1 - npm]** install, import and register chosen icons globally in main.js

```bash
npm install vue-icons-bootstrap -D
```
```bash
npm install vue-icons-mdi -D
```
```bash
npm install vue-icons-fontawesome -D
```
```bash
npm install vue-icons-heroicons -D
```

```js
// main.js

import { 
  BTriangleFill,
  BTropicalStorm,
  BBookFill,
} from "vue-icons-bootstrap"

let app = createApp(App);

[
  BTriangleFill,
  BTropicalStorm,
  BBookFill
].forEach((icon) => {
  let { vendor, name, type } = icon.$_icon;
  app.component(`${vendor}${name}${type.join("")}`, icon);
})
```

you can also import icons locally in components.

```js
// component.vue

import { BTriangleFill } from "vue-icons-bootstrap"
```

**[Option 2 - vite glob import]** or use vite glob import (recommended)

```js
// main.js (vite)

const modules = import.meta.globEager('./icons/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let { vendor, name, type } = definition.default.$_icon;
  app.component(`${vendor}${name}${type.join("")}`, definition.default);
})
```

Vite will automatically import and register icons in `icons` directory. Available icons will be updated every time files are added or deleted from directory.
You can preview and download icon components directly from [Vue Icon Browser](https://vue-icon-browser.netlify.app/)

* [Vite docs: importing multiple modules from the file system](https://vitejs.dev/guide/features.html#glob-import)

Another way to register icons is to use aliases for easier to remember icon names or changing icons application wide.

```js
// main.js (vite)

const modules = import.meta.globEager('./icons/*.js')

let iconAliases = [
  ["MdiFile", "i-file"]
]

Object.entries(modules).forEach(([path, definition]) => {
  let { vendor, name, type } = definition.default.$_icon;
  let icon = iconAliases.find((i) => i[0] === vendor + name)
  if (icon) app.component(icon[1], definition.default)
})
```
## $_icon property

Icon components have additional property `$_icon` that contains data about icon like name, vendor, type and other. This property is useful for registration of the component as it allows to customize naming patterns.

## Using icons in templates

Icons can be used directly or with vue build-in dynamic component

```html
<b-triangle-fill class="h-5 w-5" />

<BTriangleFill class="h-5 w-5" />

<component is="b-triangle-fill" class="h-5 w-5" />

<component is="BTriangleFill" class="h-5 w-5" />
```

or by setting up minimal Icon component

```vue
// Icon.vue

<template>
  <component :is="name"></component>
</template>

<script setup>
defineProps({
  name: String,
})
</script>
```
```html
<icon name="b-triangle-fill" />
```

## Naming

The general pattern for naming icon is VendorNameType. Vendor is optional but recommended when using multiple vendors. Type is optional but recommended for Font Awesome and Heroicons.

### ICONS

**Font Awesome**  
[https://github.com/FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)  
Icons — CC BY 4.0 License

**Bootstrap Icons**  
[https://github.com/twbs/icons](https://github.com/twbs/icons)  
MIT

**Material Design Icons**  
[https://github.com/google/material-design-icons](https://github.com/google/material-design-icons)  
Apache License Version 2.0
