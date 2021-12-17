import { h } from 'vue'
export default {
  name: "BluetoothLight",
  vendor: "Ph",
  type: "",
  tags: ["bluetooth","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-bluetooth-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='120 32.003 184 80.003 120 128.003 120 32.003' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <polygon points='120 128.003 184 176.003 120 224.003 120 128.003' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='56' y1='80.00256' x2='120' y2='128.00256' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='56' y1='176.00256' x2='120' y2='128.00256' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}