import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckSquareThin",
    vendor: "Ph",
    type: "",
    tags: ["check","square","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-check-square-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='172 104 113.333 160 84 132' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}