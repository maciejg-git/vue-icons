import { h } from 'vue'
export default {
  name: "LayoutDuotone",
  vendor: "Ph",
  type: "",
  tags: ["layout","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-layout-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M104,208V104H32v96a8,8,0,0,0,8,8H96' opacity='0.2'/>  <line x1='32' y1='104' x2='224' y2='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='104' y1='104' x2='104' y2='208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='32' y='48' width='192' height='160' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}