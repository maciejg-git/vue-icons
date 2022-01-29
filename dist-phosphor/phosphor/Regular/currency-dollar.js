import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyDollar",
    vendor: "Ph",
    type: "",
    tags: ["currency","dollar"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-currency-dollar","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='24' x2='128' y2='232' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}