import { h } from 'vue'
export default {
  name: "ArmchairThin",
  vendor: "Ph",
  type: "",
  tags: ["armchair","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-armchair-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='80' y1='136' x2='176' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}