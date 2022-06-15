import { h } from 'vue'
export default {
  $_icon: {
    name: "LaptopAccount",
    vendor: "Mdi",
    type: "",
    tags: ["laptop","account"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-laptop-account","innerHTML":"<path d='M20 4C21.1 4 22 4.89 22 6V16C22 17.11 21.11 18 20 18H24V20H0V18H4C2.9 18 2 17.11 2 16V6C2 4.89 2.89 4 4 4H20M20 6H4V16H20V6M12 12C14.21 12 16 12.9 16 14V15H8V14C8 12.9 9.79 12 12 12M12 7C13.11 7 14 7.9 14 9S13.11 11 12 11 10 10.11 10 9 10.9 7 12 7Z' />"},
    )
  }
}