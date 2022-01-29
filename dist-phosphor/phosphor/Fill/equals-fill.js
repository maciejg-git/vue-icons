import { h } from 'vue'
export default {
  $_icon: {
    name: "EqualsFill",
    vendor: "Ph",
    type: "",
    tags: ["equals","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-equals-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <path d='M216,152H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'/>    <path d='M40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z'/>  </g>"},
    )
  }
}