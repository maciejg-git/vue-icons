import { h } from 'vue'
export default {
  name: "PrescriptionBold",
  vendor: "Ph",
  type: "",
  tags: ["prescription","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-prescription-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M72,128h48a44,44,0,0,0,0-88H72V192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <line x1='112' y1='128' x2='200' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <line x1='200' y1='160' x2='144' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}