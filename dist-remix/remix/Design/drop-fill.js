import { h } from 'vue'
export default {
  $_icon: {
    name: "DropFill",
    vendor: "Rx",
    type: "",
    tags: ["drop","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-drop-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5.636 6.636L12 .272l6.364 6.364a9 9 0 1 1-12.728 0z'/>    </g>"},
    )
  }
}