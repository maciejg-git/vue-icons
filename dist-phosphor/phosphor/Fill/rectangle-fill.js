import { h } from 'vue'
export default {
  $_icon: {
    name: "RectangleFill",
    vendor: "Ph",
    type: "",
    tags: ["rectangle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-rectangle-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='24.00781' y='40' width='208' height='176' rx='16'/>"},
    )
  }
}