import { h } from 'vue'
export default {
  name: "Hand",
  vendor: "Ph",
  type: "",
  tags: ["hand"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-hand","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M168,120V36a20,20,0,0,0-40,0v84' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}