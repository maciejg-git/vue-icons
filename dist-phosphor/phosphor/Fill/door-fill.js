import { h } from 'vue'
export default {
  name: "DoorFill",
  vendor: "Ph",
  type: "",
  tags: ["door","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-door-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M232,216H208V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-76a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z'/>"},
    )
  }
}