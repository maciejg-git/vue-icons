import { h } from 'vue'
export default {
  $_icon: {
    name: "SpamFill",
    vendor: "Rx",
    type: "",
    tags: ["spam","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-spam-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zM11 15v2h2v-2h-2zm0-8v6h2V7h-2z'/>    </g>"},
    )
  }
}