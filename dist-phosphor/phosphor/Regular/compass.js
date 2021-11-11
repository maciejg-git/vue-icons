import { h } from 'vue'
export default {
  name: "Compass",
  vendor: "Ph",
  type: "",
  tags: ["compass"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-compass","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <polygon points='144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}