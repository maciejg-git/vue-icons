import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckboxBlankCircleFill",
    vendor: "Rx",
    type: "",
    tags: ["checkbox","blank","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-checkbox-blank-circle-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <circle cx='12' cy='12' r='10'/>    </g>"},
    )
  }
}