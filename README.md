# Vue-bootstrap-icons

[Bootstrap icons](https://https://icons.getbootstrap.com/), Material Design Icons and Font Awesome icons converted to unified, self contained Vue 3 components. 

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

**registerIcon** is just handy shortcut to app.component function. You can skip it and register icons one by one using app.component(icon). 

**[Option 2]** or import and register icons locally in component

```js
// component.vue

import { BTriangleFill } from "vue-bootstrap-icons"

...

components: { BTriangleFill }
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

Copy any icons to [app icon directory] and use them in all components. Vite will update available icons if directory content changes.

For webpack see examples in Vue documentation
* [Automatic Global Registration of Base Components (Vue 3)](https://v3.vuejs.org/cookbook/automatic-global-registration-of-base-components.html#base-example)
* [Automatic Global Registration of Base Components (Vue 2)](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)

## Using icons in templates

**[Option 1]** use **Icon** component to display icons in templates. Import it and register globally

```js
// main.js

import Icon from "Vue-bootstrap-icons/dist/vue"

app.component('icon', Icon)
```

and use it in template

```html
// component.vue

<icon icon="b-triangle-fill" class="h-5 w-5" />
```

**[Option 2]** or use icons directly as components without Icon component

```html
// component.vue

<b-triangle-fill class="h-5 w-5" />

<BTriangleFill class="h-5 w-5" />
```

## Naming

The general pattern for naming icon is [Vendor prefix][Icon name]['Icon' suffix]. By default all imported and registered icons have vendor prefix and does not have 'Icon' suffix to avoid conflicts. You can change naming of icon components by using options argument of registerIcon function as in example below.

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

glob import also supports customizing icon names 

```js
// main.js (vite)

const modules = import.meta.globEager('./[project icon directory]/*.js')

Object.entries(modules).forEach(([path, definition]) => {
  let icon = definition.default.vendor + definition.default.name + "Icon"
  app.component(icon, definition.default)
})
```

## Styling

Each icon have one base [vendor prefix]-[icon name] class added by default. You can add more by simply adding classes to icon component. Use color property to set icon color and width/height to set size. To make icons from all vendors the same size use this css.

```css
.b-icon {
  height: 1em;
  width: 1em;
}

.mdi-icon {
  height: 1em;
  width: 1em;
}

.fa-icon {
  height: 1em;
  width: 1em;
}
```

### Additional notes
