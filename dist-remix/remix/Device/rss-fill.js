import { h } from 'vue'
export default {
  name: "RssFill",
  vendor: "Rx",
  type: "",
  tags: ["rss","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-rss-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z'/>    </g>"},
    )
  }
}