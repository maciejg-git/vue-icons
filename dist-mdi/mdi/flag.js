import { h } from 'vue'
export default {
  name: "Flag",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-flag","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" }) ]
    )
  }
}