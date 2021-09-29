import { h } from 'vue'
export default {
  name: "RewindCircleThin",
  vendor: "Ph",
  tags: ["rewind","circle","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-rewind-circle-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polygon points='172 160 124 128 172 96 172 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polygon points='116 160 68 128 116 96 116 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}