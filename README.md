# Vue-bootstrap-icons

[Bootstrap icons](https://https://icons.getbootstrap.com/), Material Design Icons and Font Awesome icons converted to unified, self contained Vue 3 components. 

Check [Icon browser using this repo](https://vue-icon-browser.netlify.app/) for examples and available icons.

## Usage

**[Option 1]** import and register chosen icons globally in main.js

```js
// main.js

import { registerIcon } from "vue-bootstrap-icons"

import { 
  BTriangleFill,
  BTropicalStorm,
  BBookFill,
} from "vue-bootstrap-icons"

let app = createApp(App);

registerIcon(app, [
  BTriangleFill,
  BTropicalStorm,
  BBookFill,
])
```

**Note**: **registerIcon** is optional. It just runs app.component for every icon with some added functionality. You can register icons directly using app.component(icon). 

**[Option 2]** or import and register icons locally in component

```js
// component.vue

import { BTriangleFill } from "vue-bootstrap-icons"

...

components: { BTriangleFill }
```

**[Option 3]** or use webpack/vite import of components from file system (recommended)

```js
// main.js (vite)

const modules = import.meta.globEager('./[app icon directory]/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let icon = definition.default.vendor + definition.default.name
  app.component(icon, definition.default)
})
```

To make icon available copy or download js file of the icon to [app icon directory]. Vite will import and register icons globally every time directory content changes.
You can download icon components from [Icon browser](https://vue-icon-browser.netlify.app/)

For webpack see examples in Vue documentation
* [Automatic Global Registration of Base Components (Vue 3)](https://v3.vuejs.org/cookbook/automatic-global-registration-of-base-components.html#base-example)
* [Automatic Global Registration of Base Components (Vue 2)](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)

## Using icons in templates

**[Option 1]** use **Icon** component to display icons in templates.

```js
// main.js

import Icon from "Vue-bootstrap-icons/dist/vue"

app.component('icon', Icon)
```

and use it in template

```html
<!-- component.vue -->

<icon icon="b-triangle-fill" class="h-5 w-5" />
<icon name="b-triangle-fill" class="h-5 w-5" />
```

**[Option 2]** or use icons directly as components without Icon component

```html
<!-- component.vue -->

<b-triangle-fill class="h-5 w-5" />
<BTriangleFill class="h-5 w-5" />
```

## Naming

The general pattern for naming icon is [Vendor prefix][Icon name]['Icon' suffix]. By default all imported and registered icons have vendor prefix and does not have 'Icon' suffix to avoid conflicts. You can change naming of icon components by using options argument of registerIcon function.

```js
// main.js

import { 
  BTriangleFill,
  BTropicalStorm,
  BBookFilln,
} from "vue-bootstrap-icons"

let app = createApp(App);

registerIcon(app, [
  BTriangleFill,
  BTropicalStorm,
  BBookFill,
], {
  vendorPrefix: false,
  iconSuffix: true,
})

// <TriangleFillIcon />
// <TripicalStormIcon />
// <BookFillIcon />
```

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
