import { h } from 'vue'
export default {
  name: "HeartBold",
  vendor: "Ph",
  tags: ["heart","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-heart-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128.01758,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.01766,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.01758,92C228.01758,160,128.01758,216,128.01758,216Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}