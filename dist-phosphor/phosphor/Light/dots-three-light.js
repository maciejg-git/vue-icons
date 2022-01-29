import { h } from 'vue'
export default {
  $_icon: {
    name: "DotsThreeLight",
    vendor: "Ph",
    type: "",
    tags: ["dots","three","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dots-three-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='10'/>  <circle cx='64' cy='128' r='10'/>  <circle cx='192' cy='128' r='10'/>"},
    )
  }
}