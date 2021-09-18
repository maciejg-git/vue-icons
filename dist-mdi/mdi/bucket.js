import { h } from 'vue'
export default {
  name: "Bucket",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-bucket","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z" }) ]
    )
  }
}