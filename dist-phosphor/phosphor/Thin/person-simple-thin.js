import { h } from 'vue'
export default {
  name: "PersonSimpleThin",
  vendor: "Ph",
  type: "",
  tags: ["person","simple","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-person-simple-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='127.88745' cy='48' r='24' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='128' y1='104' x2='128' y2='152' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='64 224 128 152 192 224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M32,128s40-24,96-24,96,24,96,24' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}