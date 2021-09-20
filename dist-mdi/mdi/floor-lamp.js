import { h } from 'vue'
export default {
  name: "FloorLamp",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-floor-lamp","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z" }) ]
    )
  }
}