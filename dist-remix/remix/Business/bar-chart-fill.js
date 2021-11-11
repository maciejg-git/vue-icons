import { h } from 'vue'
export default {
  name: "BarChartFill",
  vendor: "Rx",
  type: "",
  tags: ["bar","chart","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-bar-chart-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z'/>    </g>"},
    )
  }
}