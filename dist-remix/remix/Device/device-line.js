import { h } from 'vue'
export default {
  name: "DeviceLine",
  vendor: "Rx",
  type: "",
  tags: ["device","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-device-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M19 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5zm-2 0V4H5v14h7V9a1 1 0 0 1 1-1h4zm-3 2v10h6V10h-6z'/>    </g>"},
    )
  }
}