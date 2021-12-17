import { h } from 'vue'
export default {
  name: "CornersOut",
  vendor: "Ph",
  type: "",
  tags: ["corners","out"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-corners-out","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='168 48 208 48 208 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='88 208 48 208 48 168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='208 168 208 208 168 208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='48 88 48 48 88 48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}