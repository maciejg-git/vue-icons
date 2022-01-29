import { h } from 'vue'
export default {
  $_icon: {
    name: "IndentIncrease",
    vendor: "Rx",
    type: "",
    tags: ["indent","increase"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-indent-increase","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z'/>    </g>"},
    )
  }
}