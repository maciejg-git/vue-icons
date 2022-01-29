import { h } from 'vue'
export default {
  $_icon: {
    name: "MapPinLineThin",
    vendor: "Ph",
    type: "",
    tags: ["map","pin","line","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-map-pin-line-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='56' y1='232' x2='200' y2='232' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='104' r='32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}