import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightDownLine",
    vendor: "Rx",
    type: "",
    tags: ["arrow","right","down","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-right-down-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z'/>    </g>"},
    )
  }
}