import { h } from 'vue'
export default {
  $_icon: {
    name: "TempColdLine",
    vendor: "Rx",
    type: "",
    tags: ["temp","cold","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-temp-cold-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path fill-rule='nonzero' d='M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z'/>    </g>"},
    )
  }
}