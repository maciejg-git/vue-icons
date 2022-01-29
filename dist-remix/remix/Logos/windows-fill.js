import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowsFill",
    vendor: "Rx",
    type: "",
    tags: ["windows","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-windows-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z'/>    </g>"},
    )
  }
}