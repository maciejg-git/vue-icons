import { h } from 'vue'
export default {
  name: "Upload",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-upload","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" }) ]
    )
  }
}