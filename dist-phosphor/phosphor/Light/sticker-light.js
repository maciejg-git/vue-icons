import { h } from 'vue'
export default {
  name: "StickerLight",
  vendor: "Ph",
  type: "",
  tags: ["sticker","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-sticker-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M136,216V184a48,48,0,0,1,48-48h32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}