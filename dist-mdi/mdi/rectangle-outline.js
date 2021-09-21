import { h } from 'vue'
export default {
  name: "RectangleOutline",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-rectangle-outline" },
      [ h("path", { "d": "M4,6V19H20V6H4M18,17H6V8H18V17Z" }) ]
    )
  }
}