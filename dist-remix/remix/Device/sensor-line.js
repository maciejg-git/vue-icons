import { h } from 'vue'
export default {
  $_icon: {
    name: "SensorLine",
    vendor: "Rx",
    type: "",
    tags: ["sensor","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-sensor-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6H6zm7-6v6h-2V2h2z'/>    </g>"},
    )
  }
}