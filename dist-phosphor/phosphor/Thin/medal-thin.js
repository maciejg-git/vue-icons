import { h } from 'vue'
export default {
  $_icon: {
    name: "MedalThin",
    vendor: "Ph",
    type: "",
    tags: ["medal","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-medal-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='127.99414' cy='96' r='80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='127.99414' cy='96' r='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='176 159.995 176 240 127.993 216 80 240 80 160.002' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}