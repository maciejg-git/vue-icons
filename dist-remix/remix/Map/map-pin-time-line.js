import { h } from 'vue'
export default {
  name: "MapPinTimeLine",
  vendor: "Rx",
  type: "",
  tags: ["map","pin","time","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-map-pin-time-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM13 11h4v2h-6V6h2v5z'/>    </g>"},
    )
  }
}