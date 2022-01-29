import { h } from 'vue'
export default {
  $_icon: {
    name: "ShowersFill",
    vendor: "Rx",
    type: "",
    tags: ["showers","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-showers-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M15 18H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001v3h-2v-3zm-4 2h2v3h-2v-3z'/>    </g>"},
    )
  }
}