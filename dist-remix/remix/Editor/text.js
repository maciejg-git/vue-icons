import { h } from 'vue'
export default {
  name: "Text",
  vendor: "Rx",
  type: "",
  tags: ["text"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-text","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13 6v15h-2V6H5V4h14v2z'/>    </g>"},
    )
  }
}