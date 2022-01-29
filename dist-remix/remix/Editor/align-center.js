import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignCenter",
    vendor: "Rx",
    type: "",
    tags: ["align","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-align-center","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z'/>    </g>"},
    )
  }
}