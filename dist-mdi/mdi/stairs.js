import { h } from 'vue'
export default {
  name: "Stairs",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-stairs","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z" }) ]
    )
  }
}