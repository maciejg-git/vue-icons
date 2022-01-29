import { h } from 'vue'
export default {
  $_icon: {
    name: "BatteryEmptyBold",
    vendor: "Ph",
    type: "",
    tags: ["battery","empty","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-battery-empty-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='46' y='38' width='144' height='180' rx='16' transform='translate(246 10) rotate(90)' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='244' y1='96' x2='244' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}