import { h } from 'vue'
export default {
  $_icon: {
    name: "DeviceTabletCamera",
    vendor: "Ph",
    type: "",
    tags: ["device","tablet","camera"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-device-tablet-camera","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='48' width='192' height='160' rx='16' transform='translate(256) rotate(90)' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='128' cy='68' r='12'/>"},
    )
  }
}