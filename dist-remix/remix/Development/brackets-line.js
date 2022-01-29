import { h } from 'vue'
export default {
  $_icon: {
    name: "BracketsLine",
    vendor: "Rx",
    type: "",
    tags: ["brackets","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-brackets-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z'/>    </g>"},
    )
  }
}