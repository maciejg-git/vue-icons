import { h } from 'vue'
export default {
  name: "Bulma",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-bulma","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z" }) ]
    )
  }
}