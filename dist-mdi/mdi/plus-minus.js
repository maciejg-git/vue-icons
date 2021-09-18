import { h } from 'vue'
export default {
  name: "PlusMinus",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-plus-minus","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z" }) ]
    )
  }
}