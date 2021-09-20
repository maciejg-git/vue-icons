import { h } from 'vue'
export default {
  name: "Poll",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-poll","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" }) ]
    )
  }
}