import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeLine",
    vendor: "Rx",
    type: "",
    tags: ["code","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-code-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z'/>    </g>"},
    )
  }
}