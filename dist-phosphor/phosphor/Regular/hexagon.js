import { h } from 'vue'
export default {
  name: "Hexagon",
  vendor: "Ph",
  type: "",
  tags: ["hexagon"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-hexagon","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}