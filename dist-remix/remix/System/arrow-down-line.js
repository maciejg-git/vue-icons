import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLine",
    vendor: "Rx",
    type: "",
    tags: ["arrow","down","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-down-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z'/>    </g>"},
    )
  }
}