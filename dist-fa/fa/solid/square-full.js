import { h } from 'vue'
export default {
  name: "SquareFull",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 512 512","class": "fa-icon","fill": "currentColor" },
      [ h("path", { "d": "M512 512H0V0h512v512z" }) ]
    )
  }
}