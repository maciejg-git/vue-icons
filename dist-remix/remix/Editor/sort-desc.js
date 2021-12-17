import { h } from 'vue'
export default {
  name: "SortDesc",
  vendor: "Rx",
  type: "",
  tags: ["sort","desc"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-sort-desc","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z'/>    </g>"},
    )
  }
}