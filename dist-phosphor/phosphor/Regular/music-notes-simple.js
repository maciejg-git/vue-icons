import { h } from 'vue'
export default {
  name: "MusicNotesSimple",
  vendor: "Ph",
  tags: ["music","notes","simple"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-music-notes-simple","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='180' cy='172' r='28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='52' cy='204' r='28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='80 204 80 64 208 32 208 172' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}