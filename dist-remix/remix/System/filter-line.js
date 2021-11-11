import { h } from 'vue'
export default {
  name: "FilterLine",
  vendor: "Rx",
  type: "",
  tags: ["filter","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-filter-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z'/>    </g>"},
    )
  }
}