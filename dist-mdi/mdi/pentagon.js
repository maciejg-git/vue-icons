import { h } from 'vue'
export default {
  name: "Pentagon",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-pentagon","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z" }) ]
    )
  }
}