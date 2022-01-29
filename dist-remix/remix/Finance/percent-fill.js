import { h } from 'vue'
export default {
  $_icon: {
    name: "PercentFill",
    vendor: "Rx",
    type: "",
    tags: ["percent","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-percent-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm12.571-6.485l1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z'/>    </g>"},
    )
  }
}