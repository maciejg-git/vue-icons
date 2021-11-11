import { h } from 'vue'
export default {
  name: "FileInfoLine",
  vendor: "Rx",
  type: "",
  tags: ["file","info","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-file-info-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z'/>    </g>"},
    )
  }
}