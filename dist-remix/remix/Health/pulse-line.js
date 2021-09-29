import { h } from 'vue'
export default {
  name: "PulseLine",
  vendor: "Rx",
  tags: ["pulse","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-pulse-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M9 7.539L15 21.539 18.659 13 23 13 23 11 17.341 11 15 16.461 9 2.461 5.341 11 1 11 1 13 6.659 13z'/>    </g>"},
    )
  }
}