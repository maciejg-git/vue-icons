# Vue-bootstrap-icons

[Bootstrap icons](https://https://icons.getbootstrap.com/), Material Design Icons, Font Awesome and Heroicons icons converted to unified, self contained Vue 3 components. 

Check [Icon browser](https://vue-icon-browser.netlify.app/) for examples, usage and available icons.

## Usage

**[Option 1 - npm]** install, import and register chosen icons globally in main.js

```bash
npm install vue-bootstrap-icons
```

```js
// main.js

import { 
  BTriangleFill,
  BTropicalStorm,
  BBookFill,
} from "vue-bootstrap-icons"

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

you can also import icons locally in components

```js
// component.vue

import { BTriangleFill } from "vue-bootstrap-icons"

...

components: { BTriangleFill }
```

**[Option 2 - glob import]** or use vite glob import (recommended)

```js
// main.js (vite)

const modules = import.meta.globEager('./[app icon directory]/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let { vendor, name, type } = definition.default.$_icon;
  app.component(`${vendor}${name}${type.join("")}`, definition.default);
})
```

To make icon available copy or download js file of the icon to [app icon directory]. Vite will import and register icons globally every time directory content changes.
You can download icon components from [Icon browser](https://vue-icon-browser.netlify.app/)

* [Vite docs: importing multiple modules from the file system](https://vitejs.dev/guide/features.html#glob-import)

## Using icons in templates

You can use icons directly or with vue build in dynamic component

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
