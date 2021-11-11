import { h } from 'vue'
export default {
  name: "EnvelopeSimpleDuotone",
  vendor: "Ph",
  type: "",
  tags: ["envelope","simple","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-envelope-simple-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='224 56 128 144 32 56 224 56' opacity='0.2'/>  <path d='M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='224 56 128 144 32 56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}