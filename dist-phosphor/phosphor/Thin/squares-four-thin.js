import { h } from 'vue'
export default {
  name: "SquaresFourThin",
  vendor: "Ph",
  type: "",
  tags: ["squares","four","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-squares-four-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='48' y='48' width='64' height='64' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <rect x='144' y='48' width='64' height='64' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <rect x='48' y='144' width='64' height='64' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <rect x='144' y='144' width='64' height='64' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}