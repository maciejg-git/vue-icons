import { h } from 'vue'
export default {
  name: "PropaneTank",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-propane-tank","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M16 6H16V4C16 2.9 15.11 2 14 2H10C8.9 2 8 2.9 8 4V6H8C5.79 6 4 7.79 4 10V17C4 18.86 5.28 20.41 7 20.86V22H17V20.86C18.72 20.42 20 18.86 20 17V10C20 7.79 18.21 6 16 6M10 4H14V6H10V4Z" }) ]
    )
  }
}