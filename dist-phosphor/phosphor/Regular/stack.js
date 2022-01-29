import { h } from 'vue'
export default {
  $_icon: {
    name: "Stack",
    vendor: "Ph",
    type: "",
    tags: ["stack"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-stack","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='32 176 128 232 224 176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='32 128 128 184 224 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polygon points='32 80 128 136 224 80 128 24 32 80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}