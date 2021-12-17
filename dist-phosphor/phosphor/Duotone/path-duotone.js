import { h } from 'vue'
export default {
  name: "PathDuotone",
  vendor: "Ph",
  type: "",
  tags: ["path","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-path-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='200' cy='200' r='24' opacity='0.2'/>  <circle cx='200' cy='200' r='24' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}