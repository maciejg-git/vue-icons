import { h } from 'vue'
export default {
  $_icon: {
    name: "Check",
    vendor: "Ph",
    type: "",
    tags: ["check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-check","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='216 72.005 104 184 48 128.005' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}