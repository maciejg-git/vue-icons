import { h } from 'vue'
export default {
  $_icon: {
    name: "VoicemailLight",
    vendor: "Ph",
    type: "",
    tags: ["voicemail","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-voicemail-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='56' cy='128' r='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='200' cy='128' r='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='56' y1='176' x2='200' y2='176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}