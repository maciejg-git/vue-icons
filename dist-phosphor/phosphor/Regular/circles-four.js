import { h } from 'vue'
export default {
  name: "CirclesFour",
  vendor: "Ph",
  type: "",
  tags: ["circles","four"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-circles-four","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='76' cy='76' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='180' cy='76' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='76' cy='180' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='180' cy='180' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}