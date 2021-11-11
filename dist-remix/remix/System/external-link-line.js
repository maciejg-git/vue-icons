import { h } from 'vue'
export default {
  name: "ExternalLinkLine",
  vendor: "Rx",
  type: "",
  tags: ["external","link","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-external-link-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z'/>    </g>"},
    )
  }
}