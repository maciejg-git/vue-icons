import { h } from 'vue'
export default {
  name: "Desktop",
  vendor: "Ph",
  type: "",
  tags: ["desktop"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-desktop","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='48' width='192' height='144' rx='16' transform='translate(256 240) rotate(180)' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='160' y1='224' x2='96' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='32' y1='152' x2='224' y2='152' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='128' y1='192' x2='128' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}