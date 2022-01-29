import { h } from 'vue'
export default {
  $_icon: {
    name: "MapTrifold",
    vendor: "Ph",
    type: "",
    tags: ["map","trifold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-map-trifold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='96 184 32 200 32 56 96 40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polygon points='160 216 96 184 96 40 160 72 160 216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='160 72 224 56 224 200 160 216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}