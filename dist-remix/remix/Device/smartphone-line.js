import { h } from 'vue'
export default {
  $_icon: {
    name: "SmartphoneLine",
    vendor: "Rx",
    type: "",
    tags: ["smartphone","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-smartphone-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/>    </g>"},
    )
  }
}