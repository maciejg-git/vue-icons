import { h } from 'vue'
export default {
  $_icon: {
    name: "FrameCornersThin",
    vendor: "Ph",
    type: "",
    tags: ["frame","corners","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-frame-corners-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='160 80 192 80 192 112' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='96 176 64 176 64 144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <rect x='32' y='48' width='192' height='160' rx='8' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}