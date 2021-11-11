import { h } from 'vue'
export default {
  name: "MagnetStraight",
  vendor: "Ph",
  type: "",
  tags: ["magnet","straight"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-magnet-straight","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='48' y1='96' x2='104' y2='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='152' y1='96' x2='208' y2='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}