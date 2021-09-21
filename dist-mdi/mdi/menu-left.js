import { h } from 'vue'
export default {
  name: "MenuLeft",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-menu-left" },
      [ h("path", { "d": "M14,7L9,12L14,17V7Z" }) ]
    )
  }
}