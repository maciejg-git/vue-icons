import { h } from 'vue'
export default {
  name: "BatteryEmptyLight",
  vendor: "Ph",
  type: "",
  tags: ["battery","empty","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-battery-empty-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='248' y1='96' x2='248' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <rect x='52' y='36' width='144' height='184' rx='16' transform='translate(252 4) rotate(90)' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}