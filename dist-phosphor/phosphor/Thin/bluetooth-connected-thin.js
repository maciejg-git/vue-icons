import { h } from 'vue'
export default {
  name: "BluetoothConnectedThin",
  vendor: "Ph",
  type: "",
  tags: ["bluetooth","connected","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-bluetooth-connected-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='120 32 184 80 120 128 120 32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polygon points='120 128 184 176 120 224 120 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='56' y1='80' x2='120' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='56' y1='176' x2='120' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='52' cy='128' r='8'/>  <circle cx='196' cy='128' r='8'/>"},
    )
  }
}