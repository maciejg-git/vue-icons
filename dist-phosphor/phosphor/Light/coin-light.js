import { h } from 'vue'
export default {
  name: "CoinLight",
  vendor: "Ph",
  type: "",
  tags: ["coin","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-coin-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <ellipse cx='128' cy='104' rx='104' ry='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='128' y1='152' x2='128' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M24,104v48c0,24,40,48,104,48s104-24,104-48V104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='192' y1='142.10679' x2='192' y2='190.10744' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='64' y1='142.10679' x2='64' y2='190.10721' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}