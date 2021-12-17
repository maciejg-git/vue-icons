import { h } from 'vue'
export default {
  name: "IdentificationBadge",
  vendor: "Ph",
  type: "",
  tags: ["identification","badge"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-identification-badge","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='136' r='32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='32' y='48' width='192' height='160' rx='8' transform='translate(256) rotate(90)' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='96' y1='64' x2='160' y2='64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}