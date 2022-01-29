import { h } from 'vue'
export default {
  $_icon: {
    name: "NumberOne",
    vendor: "Ph",
    type: "",
    tags: ["number","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-number-one","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='84 63.986 132 32 132 224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}