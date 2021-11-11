import { h } from 'vue'
export default {
  name: "HighlighterCircleBold",
  vendor: "Ph",
  type: "",
  tags: ["highlighter","circle","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-highlighter-circle-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <polyline points='104 148 104 104 152 80 152 148' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <path d='M168,215.29789V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.29789' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}