import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderChartLine",
    vendor: "Rx",
    type: "",
    tags: ["folder","chart","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-folder-chart-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 4h2v8h-2V9zm4 3h2v5h-2v-5zm-8 2h2v3H7v-3z'/>    </g>"},
    )
  }
}