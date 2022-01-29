import { h } from 'vue'
export default {
  $_icon: {
    name: "SpeakerSimpleNone",
    vendor: "Ph",
    type: "",
    tags: ["speaker","simple","none"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-speaker-simple-none","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}