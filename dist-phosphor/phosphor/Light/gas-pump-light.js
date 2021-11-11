import { h } from 'vue'
export default {
  name: "GasPumpLight",
  vendor: "Ph",
  type: "",
  tags: ["gas","pump","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-gas-pump-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='32' y1='216' x2='192' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.62741a16,16,0,0,0-4.68629-11.3137L216,56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='136' y1='112' x2='88' y2='112' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}