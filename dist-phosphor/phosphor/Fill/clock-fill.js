import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockFill",
    vendor: "Ph",
    type: "",
    tags: ["clock","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-clock-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm56,112H128a7.99541,7.99541,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z'/>"},
    )
  }
}