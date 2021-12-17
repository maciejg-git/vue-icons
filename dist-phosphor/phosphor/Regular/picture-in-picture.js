import { h } from 'vue'
export default {
  name: "PictureInPicture",
  vendor: "Ph",
  type: "",
  tags: ["picture","in","picture"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-picture-in-picture","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='56' width='192' height='144' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M136,200V136a8,8,0,0,1,8-8h80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}