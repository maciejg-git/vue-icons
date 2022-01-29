import { h } from 'vue'
export default {
  $_icon: {
    name: "Warning",
    vendor: "Ph",
    type: "",
    tags: ["warning"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-warning","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='104' x2='128' y2='144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='128' cy='180' r='12'/>"},
    )
  }
}