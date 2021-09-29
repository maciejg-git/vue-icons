import { h } from 'vue'
export default {
  name: "Separator",
  vendor: "Rx",
  tags: ["separator"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-separator","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z'/>    </g>"},
    )
  }
}