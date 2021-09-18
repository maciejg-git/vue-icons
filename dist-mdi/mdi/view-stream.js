import { h } from 'vue'
export default {
  name: "ViewStream",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-view-stream","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M4,5V11H21V5M4,18H21V12H4V18Z" }) ]
    )
  }
}