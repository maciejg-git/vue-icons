import { h } from 'vue'
export default {
  name: "BracketsCurlyThin",
  vendor: "Ph",
  tags: ["brackets","curly","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-brackets-curly-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M80,40c-64,0,0,88-64,88,64,0,0,88,64,88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M176,40c64,0,0,88,64,88-64,0,0,88-64,88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}