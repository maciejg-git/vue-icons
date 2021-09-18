import { h } from 'vue'
export default {
  name: "Egg",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 384 512","class": "fa-icon" },
      [ h("path", { "d": "M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z" }) ]
    )
  }
}