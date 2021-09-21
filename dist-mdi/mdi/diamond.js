import { h } from 'vue'
export default {
  name: "Diamond",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-diamond" },
      [ h("path", { "d": "M6,2L2,8L12,22L22,8L18,2H6Z" }) ]
    )
  }
}