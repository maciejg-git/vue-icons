import { h } from 'vue'
export default {
  $_icon: {
    name: "BrowserFill",
    vendor: "Ph",
    type: "",
    tags: ["browser","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-browser-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M216.0006,40H40.00721a16.018,16.018,0,0,0-15.9994,16V95.84521C24.00684,95.89746,24,95.94775,24,96s.00684.10254.00781.15479V200a16.018,16.018,0,0,0,15.9994,16H216.0006A16.018,16.018,0,0,0,232,200V56A16.018,16.018,0,0,0,216.0006,40Zm0,16,.002,32H40.00721V56Z'/>"},
    )
  }
}