import { h } from 'vue'
export default {
  $_icon: {
    name: "PauseCircleFill",
    vendor: "Ph",
    type: "",
    tags: ["pause","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-pause-circle-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z'/>"},
    )
  }
}