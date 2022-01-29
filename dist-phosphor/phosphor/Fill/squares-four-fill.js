import { h } from 'vue'
export default {
  $_icon: {
    name: "SquaresFourFill",
    vendor: "Ph",
    type: "",
    tags: ["squares","four","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-squares-four-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <rect x='40' y='40' width='80' height='80' rx='8'/>    <rect x='136' y='40' width='80' height='80' rx='8'/>    <rect x='40' y='136' width='80' height='80' rx='8'/>    <rect x='136' y='136' width='80' height='80' rx='8'/>  </g>"},
    )
  }
}