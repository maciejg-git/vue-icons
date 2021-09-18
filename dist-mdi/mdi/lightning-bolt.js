import { h } from 'vue'
export default {
  name: "LightningBolt",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-lightning-bolt","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M11 15H6L13 1V9H18L11 23V15Z" }) ]
    )
  }
}