import { h } from 'vue'
export default {
  name: "TextHThin",
  vendor: "Ph",
  type: "",
  tags: ["text","h","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-text-h-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='56' y1='56' x2='56' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='200' y1='128' x2='56' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='200' y1='56' x2='200' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}