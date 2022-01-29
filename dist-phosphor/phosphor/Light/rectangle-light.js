import { h } from 'vue'
export default {
  $_icon: {
    name: "RectangleLight",
    vendor: "Ph",
    type: "",
    tags: ["rectangle","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rectangle-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32.00781' y='48.00005' width='192' height='160' rx='8' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}