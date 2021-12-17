import { h } from 'vue'
export default {
  name: "ChalkboardSimpleLight",
  vendor: "Ph",
  type: "",
  tags: ["chalkboard","simple","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-chalkboard-simple-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M32,168V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='16' y1='200' x2='240' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <polyline points='120 200 120 168 184 168 184 200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}