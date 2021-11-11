import { h } from 'vue'
export default {
  name: "Post",
  vendor: "Mdi",
  type: "",
  tags: ["post"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-post","innerHTML":"<path d='M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z' />"},
    )
  }
}