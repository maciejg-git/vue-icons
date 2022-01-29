import { h } from 'vue'
export default {
  $_icon: {
    name: "HeadAlert",
    vendor: "Mdi",
    type: "",
    tags: ["head","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-head-alert","innerHTML":"<path d='M13 3C9.2 3 6.2 5.9 6 9.7L4.1 12.2C3.9 12.5 4.1 13 4.5 13H6V16C6 17.1 6.9 18 8 18H9V21H16V16.3C18.4 15.2 20 12.8 20 10C20 6.1 16.9 3 13 3M14 15H12V13H14V14M14 11H12V5H14V11Z' />"},
    )
  }
}