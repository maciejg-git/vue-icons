import { h } from 'vue'
export default {
  name: "WindFill",
  vendor: "Ph",
  type: "",
  tags: ["wind","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-wind-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M184,184a32.00415,32.00415,0,0,1-62.01855,11.10449,8.00013,8.00013,0,1,1,15.00585-5.55273A16.00278,16.00278,0,1,0,152,168H40a8,8,0,0,1,0-16H152A32.03635,32.03635,0,0,1,184,184Zm-64-80A32,32,0,1,0,89.98145,60.89551a8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,120,88H24a8,8,0,0,0,0,16Zm88-32a32.13165,32.13165,0,0,0-30.01855,20.89551,8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,208,120H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z'/>"},
    )
  }
}