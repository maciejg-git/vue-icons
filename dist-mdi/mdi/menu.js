import { h } from 'vue'
export default {
  name: "Menu",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-menu","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" }) ]
    )
  }
}