import { h } from 'vue'
export default {
  $_icon: {
    name: "AlarmWarningLine",
    vendor: "Rx",
    type: "",
    tags: ["alarm","warning","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-alarm-warning-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1zm2 0h12v-6a6 6 0 1 0-12 0v6zm5-18h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3H7z'/>    </g>"},
    )
  }
}