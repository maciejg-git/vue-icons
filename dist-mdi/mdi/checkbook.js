import { h } from 'vue'
export default {
  name: "Checkbook",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-checkbook","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z" }) ]
    )
  }
}