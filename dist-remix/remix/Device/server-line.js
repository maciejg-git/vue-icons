import { h } from 'vue'
export default {
  name: "ServerLine",
  vendor: "Rx",
  type: "",
  tags: ["server","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-server-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5 11h14V5H5v6zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 9H5v6h14v-6zM7 15h3v2H7v-2zm0-8h3v2H7V7z'/>    </g>"},
    )
  }
}