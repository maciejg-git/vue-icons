import { h } from 'vue'
export default {
  name: "WifiNone",
  vendor: "Ph",
  tags: ["wifi","none"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-wifi-none","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='200' r='12'/>"},
    )
  }
}