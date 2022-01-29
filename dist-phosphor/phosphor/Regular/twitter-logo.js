import { h } from 'vue'
export default {
  $_icon: {
    name: "TwitterLogo",
    vendor: "Ph",
    type: "",
    tags: ["twitter","logo"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-twitter-logo","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32.26239,32.2625A128.00746,128.00746,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,87.9862,48Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}