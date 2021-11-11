import { h } from 'vue'
export default {
  name: "Cake",
  vendor: "Ph",
  type: "",
  tags: ["cake"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-cake","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='88' x2='128' y2='64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M128,64c46.22222-16,0-56,0-56S80,48,128,64Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M162,126a34,34,0,0,1-68,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}