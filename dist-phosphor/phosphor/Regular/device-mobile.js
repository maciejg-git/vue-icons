import { h } from 'vue'
export default {
  name: "DeviceMobile",
  vendor: "Ph",
  type: "",
  tags: ["device","mobile"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-device-mobile","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='64' y='24' width='128' height='208' rx='16' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='64' y1='56' x2='192' y2='56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='64' y1='200' x2='192' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}