import { h } from 'vue'
export default {
  name: "PlayPause",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-play-pause","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" }) ]
    )
  }
}