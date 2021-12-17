import { h } from 'vue'
export default {
  name: "BagLight",
  vendor: "Ph",
  type: "",
  tags: ["bag","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-bag-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='72' width='192' height='144' rx='8' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M88,104V72a40,40,0,0,1,80,0v32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}