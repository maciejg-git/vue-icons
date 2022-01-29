import { h } from 'vue'
export default {
  $_icon: {
    name: "GhostLight",
    vendor: "Ph",
    type: "",
    tags: ["ghost","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-ghost-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='100' cy='116' r='10'/>  <circle cx='156' cy='116' r='10'/>  <path d='M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}