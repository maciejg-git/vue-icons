import { h } from 'vue'
export default {
  $_icon: {
    name: "PercentDuotone",
    vendor: "Ph",
    type: "",
    tags: ["percent","duotone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-percent-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='76' cy='76' r='28' opacity='0.2'/>  <circle cx='180' cy='180' r='28' opacity='0.2'/>  <line x1='200' y1='56' x2='56' y2='200' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='76' cy='76' r='28' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <circle cx='180' cy='180' r='28' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>"},
    )
  }
}