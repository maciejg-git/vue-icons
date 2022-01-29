import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuAddLine",
    vendor: "Rx",
    type: "",
    tags: ["menu","add","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-menu-add-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z'/>    </g>"},
    )
  }
}