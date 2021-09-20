import { h } from 'vue'
export default {
  name: "SquareWave",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-square-wave","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M2 2V12H4V4H11V22H22V12H20V20H13V2H2Z" }) ]
    )
  }
}