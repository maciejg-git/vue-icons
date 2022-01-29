import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownRight",
    vendor: "Ph",
    type: "",
    tags: ["arrow","down","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-arrow-down-right","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='64' y1='64' x2='192' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='88 192 192 192 192 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}