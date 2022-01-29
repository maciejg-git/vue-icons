import { h } from 'vue'
export default {
  $_icon: {
    name: "CirclesThreeFill",
    vendor: "Ph",
    type: "",
    tags: ["circles","three","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-circles-three-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <circle cx='128' cy='68' r='48'/>    <circle cx='188' cy='172' r='48'/>    <circle cx='68' cy='172' r='48'/>  </g>"},
    )
  }
}