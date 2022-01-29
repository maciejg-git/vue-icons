import { h } from 'vue'
export default {
  $_icon: {
    name: "Space",
    vendor: "Rx",
    type: "",
    tags: ["space"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-space","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h2z'/>    </g>"},
    )
  }
}