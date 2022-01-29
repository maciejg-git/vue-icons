import { h } from 'vue'
export default {
  $_icon: {
    name: "HardDrive",
    vendor: "Ph",
    type: "",
    tags: ["hard","drive"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-hard-drive","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='24' y='72' width='208' height='112' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='188' cy='128' r='12'/>"},
    )
  }
}