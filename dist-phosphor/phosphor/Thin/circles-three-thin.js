import { h } from 'vue'
export default {
  name: "CirclesThreeThin",
  vendor: "Ph",
  type: "",
  tags: ["circles","three","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-circles-three-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='68' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='188' cy='172' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='68' cy='172' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}