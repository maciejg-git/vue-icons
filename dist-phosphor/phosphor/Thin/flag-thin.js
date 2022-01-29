import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagThin",
    vendor: "Ph",
    type: "",
    tags: ["flag","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-flag-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='216.00452' x2='40' y2='48.00452' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}