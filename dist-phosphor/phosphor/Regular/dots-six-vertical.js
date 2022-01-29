import { h } from 'vue'
export default {
  $_icon: {
    name: "DotsSixVertical",
    vendor: "Ph",
    type: "",
    tags: ["dots","six","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dots-six-vertical","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='92' cy='60' r='12'/>  <circle cx='164' cy='60' r='12'/>  <circle cx='92' cy='128' r='12'/>  <circle cx='164' cy='128' r='12'/>  <circle cx='92' cy='196' r='12'/>  <circle cx='164' cy='196' r='12'/>"},
    )
  }
}