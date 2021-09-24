import { h } from 'vue'
export default {
  name: "SquareFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-square-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='32' width='192' height='192' rx='16'/>"},
    )
  }
}