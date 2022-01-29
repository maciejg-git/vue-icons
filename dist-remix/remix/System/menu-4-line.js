import { h } from 'vue'
export default {
  $_icon: {
    name: "Menu4Line",
    vendor: "Rx",
    type: "",
    tags: ["menu","4","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-menu-4-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z'/>    </g>"},
    )
  }
}