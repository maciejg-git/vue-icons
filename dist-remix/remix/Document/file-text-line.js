import { h } from 'vue'
export default {
  name: "FileTextLine",
  vendor: "Rx",
  type: "",
  tags: ["file","text","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-file-text-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z'/>    </g>"},
    )
  }
}