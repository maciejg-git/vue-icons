import { h } from 'vue'
export default {
  $_icon: {
    name: "LayoutBottomLine",
    vendor: "Rx",
    type: "",
    tags: ["layout","bottom","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-layout-bottom-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path fill-rule='nonzero' d='M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM4 16v3h16v-3H4zm0-2h16V5H4v9z'/>    </g>"},
    )
  }
}