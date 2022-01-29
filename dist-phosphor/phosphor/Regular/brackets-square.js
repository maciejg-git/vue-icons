import { h } from 'vue'
export default {
  $_icon: {
    name: "BracketsSquare",
    vendor: "Ph",
    type: "",
    tags: ["brackets","square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-brackets-square","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='80 40 40 40 40 216 80 216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='176 40 216 40 216 216 176 216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}