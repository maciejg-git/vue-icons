import { h } from 'vue'
export default {
  name: "GridFour",
  vendor: "Ph",
  type: "",
  tags: ["grid","four"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-grid-four","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='44' y='44' width='168' height='168' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='128' y1='44' x2='128' y2='212' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='212' y1='128' x2='44' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}