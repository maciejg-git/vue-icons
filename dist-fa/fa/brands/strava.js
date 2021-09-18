import { h } from 'vue'
export default {
  name: "Strava",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 384 512","class": "fa-icon" },
      [ h("path", { "d": "M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" }) ]
    )
  }
}