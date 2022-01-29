import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteThin",
    vendor: "Ph",
    type: "",
    tags: ["music","note","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-music-note-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='88' cy='184' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='128 184 128 40 208 64 208 112 128 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}