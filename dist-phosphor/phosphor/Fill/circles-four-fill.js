import { h } from 'vue'
export default {
  name: "CirclesFourFill",
  vendor: "Ph",
  tags: ["circles","four","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-circles-four-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <circle cx='76' cy='76' r='44'/>    <circle cx='180' cy='76' r='44'/>    <circle cx='76' cy='180' r='44'/>    <circle cx='180' cy='180' r='44'/>  </g>"},
    )
  }
}