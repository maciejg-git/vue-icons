import { h } from 'vue'
export default {
  name: "Segment",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-segment","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9" }) ]
    )
  }
}