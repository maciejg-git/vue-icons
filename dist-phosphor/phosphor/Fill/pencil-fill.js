import { h } from 'vue'
export default {
  name: "PencilFill",
  vendor: "Ph",
  type: "",
  tags: ["pencil","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-pencil-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M224,76.68652,179.314,32a15.99948,15.99948,0,0,0-22.62744,0L130.34473,58.3418l-.00147.00146-.00146.00147L36.687,151.99951A15.89429,15.89429,0,0,0,32,163.31348V208a16.01833,16.01833,0,0,0,16,16H92.68652A15.89438,15.89438,0,0,0,104,219.31348l120.00049-120A16.01823,16.01823,0,0,0,224,76.68652Zm-32,32L147.31372,64,168,43.31348,212.68652,88Z'/>"},
    )
  }
}