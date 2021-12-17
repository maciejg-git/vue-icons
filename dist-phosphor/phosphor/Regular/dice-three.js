import { h } from 'vue'
export default {
  name: "DiceThree",
  vendor: "Ph",
  type: "",
  tags: ["dice","three"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dice-three","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='92' cy='92' r='12'/>  <circle cx='128' cy='128' r='12'/>  <circle cx='164' cy='164' r='12'/>"},
    )
  }
}