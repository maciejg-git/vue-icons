import { h } from 'vue'
export default {
  name: "TrayLight",
  vendor: "Ph",
  type: "",
  tags: ["tray","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-tray-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}