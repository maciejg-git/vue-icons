import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartBar",
    vendor: "Ph",
    type: "",
    tags: ["chart","bar"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-chart-bar","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='44 208 44 136 100 136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='228' y1='208' x2='28' y2='208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='100 208 100 88 156 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='156' y='40' width='56' height='168' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}