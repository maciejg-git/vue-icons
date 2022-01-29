import { h } from 'vue'
export default {
  $_icon: {
    name: "FullscreenLine",
    vendor: "Rx",
    type: "",
    tags: ["fullscreen","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-fullscreen-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z'/>    </g>"},
    )
  }
}