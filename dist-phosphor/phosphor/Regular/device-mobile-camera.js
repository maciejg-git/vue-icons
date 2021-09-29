import { h } from 'vue'
export default {
  name: "DeviceMobileCamera",
  vendor: "Ph",
  tags: ["device","mobile","camera"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-device-mobile-camera","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='24' y='64' width='208' height='128' rx='16' transform='translate(256) rotate(90)' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='128' cy='60' r='12'/>"},
    )
  }
}