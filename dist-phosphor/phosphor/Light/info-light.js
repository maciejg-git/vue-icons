import { h } from 'vue'
export default {
  name: "InfoLight",
  vendor: "Ph",
  tags: ["info","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-info-light","innerHTML":"  <g opacity='0.1'>    <rect x='0.00098' width='256' height='256' fill='none'/>  </g>  <circle cx='128.00098' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <polyline points='120 120 128.001 120 128 176 136 176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='126' cy='84' r='10'/>"},
    )
  }
}