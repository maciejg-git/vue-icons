import { h } from 'vue'
export default {
  $_icon: {
    name: "AppleKeyboardCaps",
    vendor: "Mdi",
    type: "",
    tags: ["apple","keyboard","caps"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-apple-keyboard-caps","innerHTML":"<path d='M15,14V8H17.17L12,2.83L6.83,8H9V14H15M12,0L22,10H17V16H7V10H2L12,0M7,18H17V24H7V18M15,20H9V22H15V20Z' />"},
    )
  }
}