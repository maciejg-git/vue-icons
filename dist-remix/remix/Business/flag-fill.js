import { h } from 'vue'
export default {
  name: "FlagFill",
  vendor: "Rx",
  tags: ["flag","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-flag-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3z'/>    </g>"},
    )
  }
}