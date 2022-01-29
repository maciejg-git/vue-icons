import { h } from 'vue'
export default {
  $_icon: {
    name: "CalculatorLight",
    vendor: "Ph",
    type: "",
    tags: ["calculator","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-calculator-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='80' y='64' width='96' height='48' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <rect x='32' y='48' width='192' height='160' rx='8' transform='translate(256) rotate(90)' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='88' cy='148' r='10'/>  <circle cx='128' cy='148' r='10'/>  <circle cx='168' cy='148' r='10'/>  <circle cx='88' cy='188' r='10'/>  <circle cx='128' cy='188' r='10'/>  <circle cx='168' cy='188' r='10'/>"},
    )
  }
}