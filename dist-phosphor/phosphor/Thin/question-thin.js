import { h } from 'vue'
export default {
  $_icon: {
    name: "QuestionThin",
    vendor: "Ph",
    type: "",
    tags: ["question","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-question-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128.00049' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='180' r='8'/>  <path d='M128,144.0045v-8a28,28,0,1,0-28-28' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}