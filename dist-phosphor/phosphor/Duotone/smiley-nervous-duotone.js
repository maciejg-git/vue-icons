import { h } from 'vue'
export default {
  $_icon: {
    name: "SmileyNervousDuotone",
    vendor: "Ph",
    type: "",
    tags: ["smiley","nervous","duotone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-smiley-nervous-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' opacity='0.2'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <polyline points='80 172 96 152 112 172 128 152 144 172 160 152 176 172' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='92' cy='108' r='12'/>  <circle cx='164' cy='108' r='12'/>"},
    )
  }
}