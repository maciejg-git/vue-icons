import { h } from 'vue'
export default {
  name: "ViewGrid",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-view-grid","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" }) ]
    )
  }
}