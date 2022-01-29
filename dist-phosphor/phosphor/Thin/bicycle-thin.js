import { h } from 'vue'
export default {
  $_icon: {
    name: "BicycleThin",
    vendor: "Ph",
    type: "",
    tags: ["bicycle","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-bicycle-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,80a16,16,0,0,0-16-16H152l56,96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='208' cy='160' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='48' cy='160' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='48 64 76 64 132 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='170.087 96 94.667 96 48 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}