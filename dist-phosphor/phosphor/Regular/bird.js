import { h } from 'vue'
export default {
  name: "Bird",
  vendor: "Ph",
  type: "",
  tags: ["bird"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-bird","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='164' cy='68' r='12'/>  <line x1='120' y1='136' x2='80' y2='184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}