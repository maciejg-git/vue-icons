import { h } from 'vue'
export default {
  name: "CircleHalfDuotone",
  vendor: "Ph",
  type: "",
  tags: ["circle","half","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-circle-half-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,32a96,96,0,0,1,0,192' opacity='0.2'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='128' y1='32' x2='128' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}