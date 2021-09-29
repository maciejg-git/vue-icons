import { h } from 'vue'
export default {
  name: "SquareThin",
  vendor: "Ph",
  tags: ["square","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-square-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}