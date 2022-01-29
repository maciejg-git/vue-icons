import { h } from 'vue'
export default {
  $_icon: {
    name: "ReservedLine",
    vendor: "Rx",
    type: "",
    tags: ["reserved","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-reserved-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path fill-rule='nonzero' d='M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7zm-8-2h14V5H5v8zm3-5h8v2H8V8z'/>    </g>"},
    )
  }
}