import { h } from 'vue'
export default {
  name: "HeartbeatThin",
  vendor: "Ph",
  type: "",
  tags: ["heartbeat","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-heartbeat-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='32 128 72 128 88 104 120 152 136 128 160 128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}