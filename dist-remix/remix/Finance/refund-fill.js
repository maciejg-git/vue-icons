import { h } from 'vue'
export default {
  $_icon: {
    name: "RefundFill",
    vendor: "Rx",
    type: "",
    tags: ["refund","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-refund-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M22 7H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm0 2v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h20zm-11 5v-2.5L6.5 16H17v-2h-6z'/>    </g>"},
    )
  }
}