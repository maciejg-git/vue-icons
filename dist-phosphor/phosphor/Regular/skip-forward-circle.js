import { h } from 'vue'
export default {
  name: "SkipForwardCircle",
  vendor: "Ph",
  tags: ["skip","forward","circle"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-skip-forward-circle","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <polygon points='148 128 100 96 100 160 148 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='156' y1='96' x2='156' y2='160' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}