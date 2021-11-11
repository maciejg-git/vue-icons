import { h } from 'vue'
export default {
  name: "MusicNote",
  vendor: "B",
  type: "",
  tags: ["music","note"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-music-note","innerHTML":"  <path d='M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z'/>  <path fill-rule='evenodd' d='M9 3v10H8V3h1z'/>  <path d='M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z'/>"},
    )
  }
}