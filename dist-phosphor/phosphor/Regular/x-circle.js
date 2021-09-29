import { h } from 'vue'
export default {
  name: "XCircle",
  vendor: "Ph",
  tags: ["x","circle"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-x-circle","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <line x1='160' y1='96' x2='96' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='160' y1='160' x2='96' y2='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}