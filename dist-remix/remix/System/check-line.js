import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckLine",
    vendor: "Rx",
    type: "",
    tags: ["check","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-check-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'/>    </g>"},
    )
  }
}