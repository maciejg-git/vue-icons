import { h } from 'vue'
export default {
  name: "EnvelopeThin",
  vendor: "Ph",
  type: "",
  tags: ["envelope","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-envelope-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='224 56 128 144 32 56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='110.54541' y1='128.00013' x2='34.4668' y2='197.73926' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='221.53418' y1='197.73926' x2='145.45424' y2='127.99964' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}