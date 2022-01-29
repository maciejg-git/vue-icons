import { h } from 'vue'
export default {
  $_icon: {
    name: "AtomBold",
    vendor: "Ph",
    type: "",
    tags: ["atom","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-atom-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <ellipse cx='128' cy='128' rx='44' ry='116' transform='translate(-53.01934 128) rotate(-45)' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <ellipse cx='128' cy='128' rx='116' ry='44' transform='translate(-53.01934 128) rotate(-45)' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='128' cy='128' r='16'/>"},
    )
  }
}