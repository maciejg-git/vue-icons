import { h } from 'vue'
export default {
  $_icon: {
    name: "List",
    vendor: "Ph",
    type: "",
    tags: ["list"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-list","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='128' x2='216' y2='128' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='40' y1='64' x2='216' y2='64' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='40' y1='192' x2='216' y2='192' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}