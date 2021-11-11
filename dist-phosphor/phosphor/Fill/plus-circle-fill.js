import { h } from 'vue'
export default {
  name: "PlusCircleFill",
  vendor: "Ph",
  type: "",
  tags: ["plus","circle","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-plus-circle-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,23.99805a104,104,0,1,0,104,104A104.12041,104.12041,0,0,0,128,23.99805Zm40,112H136v32a8,8,0,1,1-16,0v-32H88a8,8,0,0,1,0-16h32v-32a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z'/>"},
    )
  }
}