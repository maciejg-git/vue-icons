import { h } from 'vue'
export default {
  name: "CirclesThreePlusFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-circles-three-plus-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <circle cx='76' cy='76' r='44'/>    <circle cx='180' cy='76' r='44'/>    <circle cx='76' cy='180' r='44'/>    <path d='M208,172H188V152a8,8,0,0,0-16,0v20H152a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V188h20a8,8,0,0,0,0-16Z'/>  </g>"},
    )
  }
}