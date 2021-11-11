import { h } from 'vue'
export default {
  name: "CeilingLight",
  vendor: "Mdi",
  type: "",
  tags: ["ceiling","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-ceiling-light","innerHTML":"<path d='M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z' />"},
    )
  }
}