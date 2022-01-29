import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftFill",
    vendor: "Rx",
    type: "",
    tags: ["arrow","left","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-left-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 13v7l-8-8 8-8v7h8v2z'/>    </g>"},
    )
  }
}