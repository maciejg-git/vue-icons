import { h } from 'vue'
export default {
  name: "LayoutLine",
  vendor: "Rx",
  type: "",
  tags: ["layout","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-layout-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5 8h14V5H5v3zm9 11v-9H5v9h9zm2 0h3v-9h-3v9zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'/>    </g>"},
    )
  }
}