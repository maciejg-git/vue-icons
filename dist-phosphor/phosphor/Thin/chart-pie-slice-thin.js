import { h } from 'vue'
export default {
  name: "ChartPieSliceThin",
  vendor: "Ph",
  type: "",
  tags: ["chart","pie","slice","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-chart-pie-slice-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='128' x2='128' y2='32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='211.13844' y1='80' x2='44.86156' y2='176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M128,32A96,96,0,1,1,45.21664,176.64005' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}