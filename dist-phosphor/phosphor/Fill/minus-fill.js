import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusFill",
    vendor: "Ph",
    type: "",
    tags: ["minus","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-minus-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z'/>"},
    )
  }
}