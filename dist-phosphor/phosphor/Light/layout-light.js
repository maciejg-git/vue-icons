import { h } from 'vue'
export default {
  $_icon: {
    name: "LayoutLight",
    vendor: "Ph",
    type: "",
    tags: ["layout","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-layout-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='104' y1='104' x2='104' y2='208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='32' y1='104' x2='224' y2='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <rect x='32' y='48' width='192' height='160' rx='8' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}