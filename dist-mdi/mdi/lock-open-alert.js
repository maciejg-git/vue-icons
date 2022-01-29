import { h } from 'vue'
export default {
  $_icon: {
    name: "LockOpenAlert",
    vendor: "Mdi",
    type: "",
    tags: ["lock","open","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-lock-open-alert","innerHTML":"<path d='M16 8C17.1 8 18 8.9 18 10V20C18 21.1 17.1 22 16 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H13V6C13 4.3 11.7 3 10 3S7 4.3 7 6H5C5 3.2 7.2 1 10 1S15 3.2 15 6V8H16M10 17C11.1 17 12 16.1 12 15S11.1 13 10 13 8 13.9 8 15 8.9 17 10 17M22 13H20V7H22V13M22 17H20V15H22V17Z' />"},
    )
  }
}