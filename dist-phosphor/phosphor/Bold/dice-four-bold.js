import { h } from 'vue'
export default {
  name: "DiceFourBold",
  vendor: "Ph",
  type: "",
  tags: ["dice","four","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-dice-four-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='96' cy='96' r='16'/>  <circle cx='160' cy='96' r='16'/>  <circle cx='96' cy='160' r='16'/>  <circle cx='160' cy='160' r='16'/>"},
    )
  }
}