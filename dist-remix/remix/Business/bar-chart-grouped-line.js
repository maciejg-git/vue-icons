import { h } from 'vue'
export default {
  $_icon: {
    name: "BarChartGroupedLine",
    vendor: "Rx",
    type: "",
    tags: ["bar","chart","grouped","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-bar-chart-grouped-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z'/>    </g>"},
    )
  }
}