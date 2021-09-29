import { h } from 'vue'
export default {
  name: "DotsNineLight",
  vendor: "Ph",
  tags: ["dots","nine","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-dots-nine-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='60' cy='60' r='10'/>  <circle cx='128' cy='60' r='10'/>  <circle cx='196' cy='60' r='10'/>  <circle cx='60' cy='128' r='10'/>  <circle cx='128' cy='128' r='10'/>  <circle cx='196' cy='128' r='10'/>  <circle cx='60' cy='196' r='10'/>  <circle cx='128' cy='196' r='10'/>  <circle cx='196' cy='196' r='10'/>"},
    )
  }
}