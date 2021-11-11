import { h } from 'vue'
export default {
  name: "DotsThreeCircleThin",
  vendor: "Ph",
  type: "",
  tags: ["dots","three","circle","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dots-three-circle-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='128' r='8'/>  <circle cx='80' cy='128' r='8'/>  <circle cx='176' cy='128' r='8'/>"},
    )
  }
}