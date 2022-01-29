import { h } from 'vue'
export default {
  $_icon: {
    name: "IndeterminateCircleFill",
    vendor: "Rx",
    type: "",
    tags: ["indeterminate","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-indeterminate-circle-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11v2h10v-2H7z'/>    </g>"},
    )
  }
}