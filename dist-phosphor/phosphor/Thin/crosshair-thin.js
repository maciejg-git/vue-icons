import { h } from 'vue'
export default {
  name: "CrosshairThin",
  vendor: "Ph",
  type: "",
  tags: ["crosshair","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-crosshair-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='128' y1='20' x2='128' y2='60' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='20' y1='128' x2='60' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='128' y1='236' x2='128' y2='196' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='236' y1='128' x2='196' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='128' r='32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}