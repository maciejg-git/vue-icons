import { h } from 'vue'
export default {
  name: "SpeakerLine",
  vendor: "Rx",
  type: "",
  tags: ["speaker","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-speaker-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5 4v16h14V4H5zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'/>    </g>"},
    )
  }
}