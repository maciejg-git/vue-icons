import { h } from 'vue'
export default {
  name: "Lamp",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-lamp","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z" }) ]
    )
  }
}