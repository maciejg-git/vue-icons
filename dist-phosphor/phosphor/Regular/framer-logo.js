import { h } from 'vue'
export default {
  name: "FramerLogo",
  vendor: "Ph",
  type: "",
  tags: ["framer","logo"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-framer-logo","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}