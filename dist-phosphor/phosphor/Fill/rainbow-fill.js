import { h } from 'vue'
export default {
  name: "RainbowFill",
  vendor: "Ph",
  type: "",
  tags: ["rainbow","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rainbow-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.09957,88.09957,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.09957,88.09957,0,0,0,128,80Zm0-32A120.13623,120.13623,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13623,120.13623,0,0,0,128,48Z'/>"},
    )
  }
}