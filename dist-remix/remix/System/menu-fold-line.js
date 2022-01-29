import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuFoldLine",
    vendor: "Rx",
    type: "",
    tags: ["menu","fold","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-menu-fold-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z'/>    </g>"},
    )
  }
}