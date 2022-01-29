import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageSettingsOutline",
    vendor: "Mdi",
    type: "",
    tags: ["message","settings","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-message-settings-outline","innerHTML":"<path d='M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M11 24H13V22H11V24M7 24H9V22H7V24M15 24H17V22H15V24' />"},
    )
  }
}