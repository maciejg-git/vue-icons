import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusThin",
    vendor: "Ph",
    type: "",
    tags: ["minus","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-minus-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='128' x2='216' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}