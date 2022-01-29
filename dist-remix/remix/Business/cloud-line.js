import { h } from 'vue'
export default {
  $_icon: {
    name: "CloudLine",
    vendor: "Rx",
    type: "",
    tags: ["cloud","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-cloud-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z'/>    </g>"},
    )
  }
}