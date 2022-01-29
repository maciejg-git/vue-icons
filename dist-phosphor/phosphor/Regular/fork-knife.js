import { h } from 'vue'
export default {
  $_icon: {
    name: "ForkKnife",
    vendor: "Ph",
    type: "",
    tags: ["fork","knife"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-fork-knife","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='84' y1='32' x2='84' y2='72' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='84' y1='116' x2='84' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M112,32l8,48a36,36,0,0,1-72,0l8-48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M204,160H148S160,48,204,32V224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}