import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewSplitVertical",
    vendor: "Mdi",
    type: "",
    tags: ["view","split","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-view-split-vertical","innerHTML":"<path d='M13,5H21V19H13V5M3,5H11V7H3V5M3,11V9H11V11H3M3,19V17H11V19H3M3,15V13H11V15H3Z' />"},
    )
  }
}