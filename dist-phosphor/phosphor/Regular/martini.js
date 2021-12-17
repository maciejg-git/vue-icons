import { h } from 'vue'
export default {
  name: "Martini",
  vendor: "Ph",
  type: "",
  tags: ["martini"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-martini","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='24 40 232 40 128 144 24 40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='128' y1='144' x2='128' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='88' y1='216' x2='168' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='56' y1='72' x2='200' y2='72' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}