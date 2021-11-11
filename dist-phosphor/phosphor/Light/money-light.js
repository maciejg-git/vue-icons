import { h } from 'vue'
export default {
  name: "MoneyLight",
  vendor: "Ph",
  type: "",
  tags: ["money","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-money-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='16' y='64' width='224' height='128' rx='8' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='128' cy='128' r='32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='176' y1='64' x2='240' y2='120' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='176' y1='192' x2='240' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='80' y1='64' x2='16' y2='120' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='80' y1='192' x2='16' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}