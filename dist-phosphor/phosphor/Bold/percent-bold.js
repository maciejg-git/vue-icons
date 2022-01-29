import { h } from 'vue'
export default {
  $_icon: {
    name: "PercentBold",
    vendor: "Ph",
    type: "",
    tags: ["percent","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-percent-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='200' y1='56' x2='56' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='76' cy='76' r='28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='180' cy='180' r='28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}