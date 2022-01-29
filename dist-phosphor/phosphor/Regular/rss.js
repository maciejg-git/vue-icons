import { h } from 'vue'
export default {
  $_icon: {
    name: "Rss",
    vendor: "Ph",
    type: "",
    tags: ["rss"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rss","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M48,144a64,64,0,0,1,64,64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M48,96A112,112,0,0,1,160,208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M48,48A160,160,0,0,1,208,208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='52' cy='204' r='12'/>"},
    )
  }
}