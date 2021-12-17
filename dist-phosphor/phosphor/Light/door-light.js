import { h } from 'vue'
export default {
  name: "DoorLight",
  vendor: "Ph",
  type: "",
  tags: ["door","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-door-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='24' y1='224' x2='232' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='156' cy='128' r='10'/>"},
    )
  }
}