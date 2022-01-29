import { h } from 'vue'
export default {
  $_icon: {
    name: "AddFill",
    vendor: "Rx",
    type: "",
    tags: ["add","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-add-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'/>    </g>"},
    )
  }
}