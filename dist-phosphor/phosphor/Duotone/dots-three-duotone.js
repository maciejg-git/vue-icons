import { h } from 'vue'
export default {
  $_icon: {
    name: "DotsThreeDuotone",
    vendor: "Ph",
    type: "",
    tags: ["dots","three","duotone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dots-three-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='12'/>  <circle cx='192' cy='128' r='12'/>  <circle cx='64' cy='128' r='12'/>"},
    )
  }
}