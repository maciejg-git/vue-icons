import { h } from 'vue'
export default {
  name: "BatteryChargingVerticalLight",
  vendor: "Ph",
  type: "",
  tags: ["battery","charging","vertical","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-battery-charging-vertical-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='96' y1='8' x2='160' y2='8' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <rect x='56' y='40' width='144' height='184' rx='16' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <polyline points='128 172 144 132 112 132 128 92' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}