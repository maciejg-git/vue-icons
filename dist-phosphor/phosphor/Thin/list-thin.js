import { h } from 'vue'
export default {
  name: "ListThin",
  vendor: "Ph",
  type: "",
  tags: ["list","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-list-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='128' x2='216' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='40' y1='64' x2='216' y2='64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='40' y1='192' x2='216' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}