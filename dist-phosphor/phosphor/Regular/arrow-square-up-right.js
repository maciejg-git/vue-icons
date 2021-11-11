import { h } from 'vue'
export default {
  name: "ArrowSquareUpRight",
  vendor: "Ph",
  type: "",
  tags: ["arrow","square","up","right"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-arrow-square-up-right","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='8' transform='translate(0 256) rotate(-90)' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <polyline points='108 100 156 100 156 148' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='100' y1='156' x2='156' y2='100' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}