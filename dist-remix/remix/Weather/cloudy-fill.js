import { h } from 'vue'
export default {
  $_icon: {
    name: "CloudyFill",
    vendor: "Rx",
    type: "",
    tags: ["cloudy","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-cloudy-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9v-.014z'/>    </g>"},
    )
  }
}