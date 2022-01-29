import { h } from 'vue'
export default {
  $_icon: {
    name: "DiceThreeBold",
    vendor: "Ph",
    type: "",
    tags: ["dice","three","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dice-three-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='88' cy='88' r='16'/>  <circle cx='128' cy='128' r='16'/>  <circle cx='168' cy='168' r='16'/>"},
    )
  }
}