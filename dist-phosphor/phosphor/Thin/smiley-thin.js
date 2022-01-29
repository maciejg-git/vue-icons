import { h } from 'vue'
export default {
  $_icon: {
    name: "SmileyThin",
    vendor: "Ph",
    type: "",
    tags: ["smiley","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-smiley-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='92' cy='108' r='8'/>  <circle cx='164' cy='108' r='8'/>  <path d='M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}