import { h } from 'vue'
export default {
  name: "Notebook",
  vendor: "Ph",
  type: "",
  tags: ["notebook"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-notebook","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='112' y1='112' x2='176' y2='112' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='112' y1='144' x2='176' y2='144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='80' y1='40' x2='80' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}