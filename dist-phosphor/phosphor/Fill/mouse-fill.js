import { h } from 'vue'
export default {
  name: "MouseFill",
  vendor: "Ph",
  type: "",
  tags: ["mouse","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-mouse-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M148,24H108A64.07239,64.07239,0,0,0,44,88v80a64.07239,64.07239,0,0,0,64,64h40a64.07239,64.07239,0,0,0,64-64V88A64.07239,64.07239,0,0,0,148,24Zm48,64v16H136V40h12A48.05468,48.05468,0,0,1,196,88ZM108,40h12v64H60V88A48.05468,48.05468,0,0,1,108,40Z'/>"},
    )
  }
}