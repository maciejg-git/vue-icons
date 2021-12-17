import { h } from 'vue'
export default {
  name: "StopLight",
  vendor: "Ph",
  type: "",
  tags: ["stop","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-stop-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='52' y='52' width='152' height='152' rx='6.90909' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}