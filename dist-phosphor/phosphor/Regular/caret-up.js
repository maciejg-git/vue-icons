import { h } from 'vue'
export default {
  $_icon: {
    name: "CaretUp",
    vendor: "Ph",
    type: "",
    tags: ["caret","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-caret-up","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='48 160 128 80 208 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}