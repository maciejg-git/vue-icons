import { h } from 'vue'
export default {
  name: "GifThin",
  vendor: "Ph",
  type: "",
  tags: ["gif","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-gif-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='136' y1='72' x2='136' y2='184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='228 72 180 72 180 184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='216' y1='128' x2='180' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M72,128H96v24a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}