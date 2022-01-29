import { h } from 'vue'
export default {
  $_icon: {
    name: "RssSimple",
    vendor: "Ph",
    type: "",
    tags: ["rss","simple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rss-simple","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M56,48A152,152,0,0,1,208,200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M56,120a80,80,0,0,1,80,80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='56' cy='200' r='12'/>"},
    )
  }
}