import { h } from 'vue'
export default {
  name: "WavesLight",
  vendor: "Ph",
  type: "",
  tags: ["waves","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-waves-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M40,72s40-32,88,0,88,0,88,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M40,128s40-32,88,0,88,0,88,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M40,184s40-32,88,0,88,0,88,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}