import { h } from 'vue'
export default {
  $_icon: {
    name: "MoneyFill",
    vendor: "Ph",
    type: "",
    tags: ["money","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-money-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M232,56H24A16.01833,16.01833,0,0,0,8,72V184a16.01833,16.01833,0,0,0,16,16H232a16.01833,16.01833,0,0,0,16-16V72A16.01833,16.01833,0,0,0,232,56ZM74.95947,184,24,140.32056V115.67944L74.95947,72H181.04053l50.96338,43.68262.002,24.63281L181.04053,184ZM168,128a40,40,0,1,1-40-40A40.04584,40.04584,0,0,1,168,128Z'/>"},
    )
  }
}