# Vue-bootstrap-icons

[Bootstrap icons](https://https://icons.getbootstrap.com/), Material Design Icons and Font Awesome icons converted to Vue 3 components. 

## Usage

**[Option 1]** import registerIcon

```js
// main.js

import { registerIcon } from "vue-bootstrap-icons"
```

Import and register chosen icons globally in main.js

```js
// main.js

import { 
  triangleFillIcon,
  tropicalStormIcon,
  bookFillIcon,
} from "vue-bootstrap-icons"

let app = createApp(App);

registerIcon(app, [
  triangleFillIcon,
  tropicalStormIcon,
  bookFillIcon,
])
```


**[Option 2]** or import and register icons locally in component

```js
// component.vue

import { TriangleFillIcon } from "vue-bootstrap-icons"

...

components: { TriangleFillIcon }
```

**[Option 3]** or use webpack/vite automatic import and registration of components

```js
// main.js (vite)

const modules = import.meta.globEager('./[app icon directory]/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let icon = definition.default.name + "Icon"
  app.component(icon, definition.default)
})
```

Copy any icons to [app icon directory] and use them in all components. Vite will update available icons if directory content changes so you can keep dropping in, testing and removing during development.

for webpack see examples in Vue documentation
* [Automatic Global Registration of Base Components (Vue 3)](https://v3.vuejs.org/cookbook/automatic-global-registration-of-base-components.html#base-example)
* [Automatic Global Registration of Base Components (Vue 2)](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)

Vite supports automatic importing from multiple dirs and subdirs. See [fast-glob documentation](https://github.com/mrmlnc/fast-glob#pattern-syntax) for possible glob patterns.

### Using icons in templates

**[Option 1]** use included icon component to display icons in templates. Import it and register globally

```js
// main.js

import Icon from "Vue-bootstrap-icons/dist/vue"

app.component('icon', Icon)
```

and use it in template

```html
// component.vue

<icon icon="triangle-fill" class="h-5 w-5" />
```

**[Option 2]** or use icons directly as components without Icon component

```html
// component.vue

<triangle-fill-icon class="h-5 w-5" />

<TriangleFillIcon class="h-5 w-5" />
```

both options give the same result.

### Additional notes

* Attributes on svg were added or modified if neccessary to make icons coming from different vendors uniform
* For each vendor base class is added
* Each icon file is self contained component making it portable and possible to glob import
* Icons were passed through SVGO before packing as components

#### Naming

The general pattern for naming icon is [B|Fa|Mdi] [icon name] [Icon]. registerIcon function allows to customize icons names. By default icons registered by this function have 'Icon' suffix and does not have vendor prefix. You can change that by adding options argument as in example below. It can be useful if using more than one vendor or if there is risk of name conflict with other components. 

```js
// main.js

import { 
  triangleFillIcon,
  tropicalStormIcon,
  bookFillIcon,
} from "vue-bootstrap-icons"

let app = createApp(App);

registerIcon(app, [
  triangleFillIcon,
  tropicalStormIcon,
  bookFillIcon,
], {
  vendorPrefix: true,
  iconSuffix: false,
})
```

Using glob import also supports customizing icon names 

```js
// main.js (vite)

const modules = import.meta.globEager('./[project icon directory]/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let icon = definition.default.vendor + definition.default.name + "Icon"
  app.component(icon, definition.default)
})
```
