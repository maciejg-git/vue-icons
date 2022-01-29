import { h } from 'vue'
export default {
  $_icon: {
    name: "Tray",
    vendor: "Mdi",
    type: "",
    tags: ["tray"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-tray","innerHTML":"<path d='M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17Z' />"},
    )
  }
}