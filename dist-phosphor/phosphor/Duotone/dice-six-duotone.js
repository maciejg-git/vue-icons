import { h } from 'vue'
export default {
  name: "DiceSixDuotone",
  vendor: "Ph",
  type: "",
  tags: ["dice","six","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dice-six-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' opacity='0.2'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='92' cy='84' r='12'/>  <circle cx='164' cy='84' r='12'/>  <circle cx='92' cy='128' r='12'/>  <circle cx='164' cy='128' r='12'/>  <circle cx='92' cy='172' r='12'/>  <circle cx='164' cy='172' r='12'/>"},
    )
  }
}