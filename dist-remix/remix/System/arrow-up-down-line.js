import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpDownLine",
    vendor: "Rx",
    type: "",
    tags: ["arrow","up","down","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-up-down-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z'/>    </g>"},
    )
  }
}