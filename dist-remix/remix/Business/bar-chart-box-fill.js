import { h } from 'vue'
export default {
  name: "BarChartBoxFill",
  vendor: "Rx",
  type: "",
  tags: ["bar","chart","box","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-bar-chart-box-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z'/>    </g>"},
    )
  }
}