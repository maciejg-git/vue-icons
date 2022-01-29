import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowCircleDownRight",
    vendor: "Ph",
    type: "",
    tags: ["arrow","circle","down","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-arrow-circle-down-right","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <polyline points='108 156 156 156 156 108' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='100' y1='100' x2='156' y2='156' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}