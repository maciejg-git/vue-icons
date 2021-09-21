import { h } from 'vue'
export default {
  name: "CodeBrackets",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-code-brackets" },
      [ h("path", { "d": "M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z" }) ]
    )
  }
}