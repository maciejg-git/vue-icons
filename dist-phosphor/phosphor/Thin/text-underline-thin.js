import { h } from 'vue'
export default {
  name: "TextUnderlineThin",
  vendor: "Ph",
  type: "",
  tags: ["text","underline","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-text-underline-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='216' x2='216' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M64,56v64a64,64,0,0,0,128,0V56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}