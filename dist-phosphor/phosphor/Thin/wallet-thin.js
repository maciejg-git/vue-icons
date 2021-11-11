import { h } from 'vue'
export default {
  name: "WalletThin",
  vendor: "Ph",
  type: "",
  tags: ["wallet","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-wallet-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='180' cy='144' r='8'/>"},
    )
  }
}