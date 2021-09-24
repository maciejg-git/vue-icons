import { h } from 'vue'
export default {
  name: "DotsThreeCircle",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-dots-three-circle","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <circle cx='128' cy='128' r='12'/>  <circle cx='176' cy='128' r='12'/>  <circle cx='80' cy='128' r='12'/>"},
    )
  }
}