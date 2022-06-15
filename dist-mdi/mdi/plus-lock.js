import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusLock",
    vendor: "Mdi",
    type: "",
    tags: ["plus","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-plus-lock","innerHTML":"<path d='M21.14 17.67V17.22C21.14 16 20.2 15 19 15S16.86 16 16.86 17.22V17.67C16.34 17.67 16 18 16 18.56V22.11C16 22.65 16.34 23 16.86 23H21.14C21.66 23 22 22.65 22 22.11V18.55C22 18 21.66 17.67 21.14 17.67M20.29 17.67H17.72V17.22C17.72 16.5 18.31 15.89 19 15.89C19.69 15.89 20.29 16.5 20.29 17.22V17.67M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z' />"},
    )
  }
}