import { h } from 'vue'
export default {
  $_icon: {
    name: "MenFill",
    vendor: "Rx",
    type: "",
    tags: ["men","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-men-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414L18.586 5z'/>    </g>"},
    )
  }
}