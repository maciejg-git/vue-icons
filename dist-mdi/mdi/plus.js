import { h } from 'vue'
export default {
  name: "Plus",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-plus","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) ]
    )
  }
}