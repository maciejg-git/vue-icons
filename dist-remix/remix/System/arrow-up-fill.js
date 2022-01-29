import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpFill",
    vendor: "Rx",
    type: "",
    tags: ["arrow","up","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-up-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13 12v8h-2v-8H4l8-8 8 8z'/>    </g>"},
    )
  }
}