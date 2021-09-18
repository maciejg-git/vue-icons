import { h } from 'vue'
export default {
  name: "TriangleOutline",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-triangle-outline","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M12,2L1,21H23M12,6L19.53,19H4.47" }) ]
    )
  }
}