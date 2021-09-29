import { h } from 'vue'
export default {
  name: "QrScanLine",
  vendor: "Rx",
  tags: ["qr","scan","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-qr-scan-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M21 16v5H3v-5h2v3h14v-3h2zM3 11h18v2H3v-2zm18-3h-2V5H5v3H3V3h18v5z'/>    </g>"},
    )
  }
}