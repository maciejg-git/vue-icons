import { h } from 'vue'
export default {
  name: "FeedbackLine",
  vendor: "Rx",
  type: "",
  tags: ["feedback","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-feedback-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z'/>    </g>"},
    )
  }
}