import { h } from 'vue'
export default {
  $_icon: {
    name: "AlarmLight",
    vendor: "Ph",
    type: "",
    tags: ["alarm","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-alarm-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='128 72 128 128 184 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='128' cy='128' r='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='195.88225' y1='26.17662' x2='229.82338' y2='60.11775' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='26.17662' y1='60.11775' x2='60.11775' y2='26.17662' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}