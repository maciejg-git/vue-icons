import { h } from 'vue'
export default {
  name: "WarningCircleLight",
  vendor: "Ph",
  type: "",
  tags: ["warning","circle","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-warning-circle-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='128' y1='80' x2='128' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='128' cy='172' r='10'/>"},
    )
  }
}