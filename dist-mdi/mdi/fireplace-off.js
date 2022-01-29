import { h } from 'vue'
export default {
  $_icon: {
    name: "FireplaceOff",
    vendor: "Mdi",
    type: "",
    tags: ["fireplace","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-fireplace-off","innerHTML":"<path d='M22,22H2V20H22V22M22,6H2V3H22V6M20,7V19H17V11C17,11 14.5,10 12,10C9.5,10 7,11 7,11V19H4V7H20Z' />"},
    )
  }
}