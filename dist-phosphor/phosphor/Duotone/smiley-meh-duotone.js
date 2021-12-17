import { h } from 'vue'
export default {
  name: "SmileyMehDuotone",
  vendor: "Ph",
  type: "",
  tags: ["smiley","meh","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-smiley-meh-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' opacity='0.2'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <line x1='88' y1='160' x2='168' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='92' cy='108' r='12'/>  <circle cx='164' cy='108' r='12'/>"},
    )
  }
}