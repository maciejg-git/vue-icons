import { h } from 'vue'
export default {
  name: "RouterLine",
  vendor: "Rx",
  type: "",
  tags: ["router","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-router-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5zM2.51 8.837C3.835 4.864 7.584 2 12 2s8.166 2.864 9.49 6.837l-1.898.632a8.003 8.003 0 0 0-15.184 0l-1.897-.632zm3.796 1.265a6.003 6.003 0 0 1 11.388 0l-1.898.633a4.002 4.002 0 0 0-7.592 0l-1.898-.633zM7 16v4h10v-4H7z'/>    </g>"},
    )
  }
}