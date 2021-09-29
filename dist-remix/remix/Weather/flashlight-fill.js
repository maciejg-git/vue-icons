import { h } from 'vue'
export default {
  name: "FlashlightFill",
  vendor: "Rx",
  tags: ["flashlight","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-flashlight-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13 10h7l-9 13v-9H4l9-13z'/>    </g>"},
    )
  }
}