import { h } from 'vue'
export default {
  $_icon: {
    name: "NewspaperCheck",
    vendor: "Mdi",
    type: "",
    tags: ["newspaper","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-newspaper-check","innerHTML":"<path d='M20.33 4.67L18.67 3L17 4.67L15.33 3L13.67 4.67L12 3L10.33 4.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3V19C2 20.11 2.9 21 4 21H12.8C12.29 20.12 12 19.09 12 18C12 16.77 12.37 15.63 13 14.68V13H14.68C15.63 12.37 16.77 12 18 12C19.53 12 20.93 12.58 22 13.5V3L20.33 4.67M11 19H4V13H11V19M20 11H4V8H20V11M16.75 21.16L14 18.16L15.16 17L16.75 18.59L20.34 15L21.5 16.41L16.75 21.16' />"},
    )
  }
}