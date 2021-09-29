import { h } from 'vue'
export default {
  name: "RhythmLine",
  vendor: "Rx",
  tags: ["rhythm","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-rhythm-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z'/>    </g>"},
    )
  }
}