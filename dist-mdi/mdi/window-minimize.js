import { h } from 'vue'
export default {
  name: "WindowMinimize",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-window-minimize" },
      [ h("path", { "d": "M20,14H4V10H20" }) ]
    )
  }
}