import { h } from 'vue'
export default {
  name: "Activity",
  vendor: "Ph",
  type: "",
  tags: ["activity"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-activity","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}