import { h } from 'vue'
export default {
  name: "NumberZero",
  vendor: "Ph",
  tags: ["number","zero"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-number-zero","innerHTML":"  <rect width='256' height='256' fill='none'/>  <ellipse cx='128' cy='128' rx='72' ry='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}