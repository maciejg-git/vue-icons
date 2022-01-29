import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBold",
    vendor: "Ph",
    type: "",
    tags: ["arrow","down","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-arrow-down-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='40' x2='128' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <polyline points='56 144 128 216 200 144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}