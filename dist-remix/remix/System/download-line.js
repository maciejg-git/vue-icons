import { h } from 'vue'
export default {
  name: "DownloadLine",
  vendor: "Rx",
  type: "",
  tags: ["download","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-download-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z'/>    </g>"},
    )
  }
}