import { h } from 'vue'
export default {
  name: "ArtboardLine",
  vendor: "Rx",
  type: "",
  tags: ["artboard","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-artboard-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z'/>    </g>"},
    )
  }
}