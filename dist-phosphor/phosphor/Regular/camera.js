import { h } from 'vue'
export default {
  name: "Camera",
  vendor: "Ph",
  type: "",
  tags: ["camera"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-camera","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='128' cy='132' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}