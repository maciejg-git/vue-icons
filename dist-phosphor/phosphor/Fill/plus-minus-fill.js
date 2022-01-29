import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusMinusFill",
    vendor: "Ph",
    type: "",
    tags: ["plus","minus","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-plus-minus-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <path d='M205.65674,50.34326a8,8,0,0,0-11.31348,0l-144,144a7.99984,7.99984,0,1,0,11.31348,11.31348l144-144A7.99915,7.99915,0,0,0,205.65674,50.34326Z'/>    <path d='M64,112a8,8,0,0,0,16,0V80h32a8,8,0,0,0,0-16H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64Z'/>    <path d='M224,176H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z'/>  </g>"},
    )
  }
}