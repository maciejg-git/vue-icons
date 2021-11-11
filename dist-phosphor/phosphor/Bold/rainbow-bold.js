import { h } from 'vue'
export default {
  name: "RainbowBold",
  vendor: "Ph",
  type: "",
  tags: ["rainbow","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rainbow-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M12,180v-8a116,116,0,0,1,232,0v8' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <path d='M152,180v-4a24,24,0,0,0-48,0v4' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <path d='M200,180v-4a72,72,0,0,0-144,0v4' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}