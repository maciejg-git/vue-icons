import { h } from 'vue'
export default {
  name: "SquareOutline",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-square-outline","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M3,3H21V21H3V3M5,5V19H19V5H5Z" }) ]
    )
  }
}