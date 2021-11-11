import { h } from 'vue'
export default {
  name: "CalendarBlank",
  vendor: "Ph",
  type: "",
  tags: ["calendar","blank"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-calendar-blank","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='176' y1='24' x2='176' y2='56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='80' y1='24' x2='80' y2='56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='40' y1='88' x2='216' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}