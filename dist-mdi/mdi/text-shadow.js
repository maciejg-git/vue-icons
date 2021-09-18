import { h } from 'vue'
export default {
  name: "TextShadow",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-text-shadow","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M3,3H16V6H11V18H8V6H3V3M12,7H14V9H12V7M15,7H17V9H15V7M18,7H20V9H18V7M12,10H14V12H12V10M12,13H14V15H12V13M12,16H14V18H12V16M12,19H14V21H12V19Z" }) ]
    )
  }
}