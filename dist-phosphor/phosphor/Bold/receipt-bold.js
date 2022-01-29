import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptBold",
    vendor: "Ph",
    type: "",
    tags: ["receipt","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-receipt-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='76' y1='100' x2='180' y2='100' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <line x1='76' y1='140' x2='180' y2='140' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <path d='M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}