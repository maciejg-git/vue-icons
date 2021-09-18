import { h } from 'vue'
export default {
  name: "Cross",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-cross","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" }) ]
    )
  }
}