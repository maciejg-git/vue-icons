import { h } from 'vue'
export default {
  name: "TriangleWave",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-triangle-wave","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M22 12L17 22L7.1 6.04L4.24 12H2L7 2L16.9 17.96L19.76 12H22Z" }) ]
    )
  }
}