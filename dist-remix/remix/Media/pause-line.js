import { h } from 'vue'
export default {
  name: "PauseLine",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-pause-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M6 5h2v14H6V5zm10 0h2v14h-2V5z'/>    </g>"},
    )
  }
}