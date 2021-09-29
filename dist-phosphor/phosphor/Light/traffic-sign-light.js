import { h } from 'vue'
export default {
  name: "TrafficSignLight",
  vendor: "Ph",
  tags: ["traffic","sign","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-traffic-sign-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='144 144 168 120 144 96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <rect x='45.97561' y='45.97561' width='164.04877' height='164.04877' rx='8' transform='translate(-53.01934 128) rotate(-45)' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M88,152v-8a24,24,0,0,1,24-24h56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}