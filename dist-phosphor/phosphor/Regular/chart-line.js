import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartLine",
    vendor: "Ph",
    type: "",
    tags: ["chart","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-chart-line","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='224 208 32 208 32 48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='224.002 96 160.002 152 96.002 104 32.002 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}