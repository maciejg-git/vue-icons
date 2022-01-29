import { h } from 'vue'
export default {
  $_icon: {
    name: "DiceSixBold",
    vendor: "Ph",
    type: "",
    tags: ["dice","six","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dice-six-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='96' cy='84' r='16'/>  <circle cx='160' cy='84' r='16'/>  <circle cx='96' cy='128' r='16'/>  <circle cx='160' cy='128' r='16'/>  <circle cx='96' cy='172' r='16'/>  <circle cx='160' cy='172' r='16'/>"},
    )
  }
}