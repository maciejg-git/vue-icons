import { h } from 'vue'
export default {
  name: "ViewColumn",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-view-column","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z" }) ]
    )
  }
}