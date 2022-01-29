import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerFill",
    vendor: "Rx",
    type: "",
    tags: ["timer","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-timer-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM11 8v6h2V8h-2zM8 1h8v2H8V1z'/>    </g>"},
    )
  }
}