import { h } from 'vue'
export default {
  name: "SmileyWinkLight",
  vendor: "Ph",
  type: "",
  tags: ["smiley","wink","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-smiley-wink-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='92' cy='108' r='10'/>  <line x1='152' y1='108' x2='176' y2='108' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}