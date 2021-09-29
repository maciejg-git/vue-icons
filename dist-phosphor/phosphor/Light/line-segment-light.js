import { h } from 'vue'
export default {
  name: "LineSegmentLight",
  vendor: "Ph",
  tags: ["line","segment","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-line-segment-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='64' cy='192' r='24' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='192' cy='64' r='24' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='175.02944' y1='80.97056' x2='80.97056' y2='175.02944' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}