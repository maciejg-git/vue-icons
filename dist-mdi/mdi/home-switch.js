import { h } from 'vue'
export default {
  name: "HomeSwitch",
  vendor: "Mdi",
  type: "",
  tags: ["home","switch"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-switch","innerHTML":"<path d='M6.5 15V11H9.5V15H13V9H15L8 3L1 9H3V15H6.5M9 16V18H15V16L18 19L15 22V20H9V22L6 19L9 16M23 9H21V15H15V10H19L13.54 5.11L16 3L23 9Z' />"},
    )
  }
}