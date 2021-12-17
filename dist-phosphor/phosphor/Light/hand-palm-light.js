import { h } from 'vue'
export default {
  name: "HandPalmLight",
  vendor: "Ph",
  type: "",
  tags: ["hand","palm","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-hand-palm-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,104V52a20,20,0,0,1,40,0v80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M88,112V36a20,20,0,0,1,40,0v68' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}