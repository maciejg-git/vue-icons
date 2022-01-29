import { h } from 'vue'
export default {
  $_icon: {
    name: "DotsThreeCircleVerticalThin",
    vendor: "Ph",
    type: "",
    tags: ["dots","three","circle","vertical","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dots-three-circle-vertical-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='80' r='8'/>  <circle cx='128' cy='128' r='8'/>  <circle cx='128' cy='176' r='8'/>"},
    )
  }
}