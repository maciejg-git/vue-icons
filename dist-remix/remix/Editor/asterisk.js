import { h } from 'vue'
export default {
  name: "Asterisk",
  vendor: "Rx",
  type: "",
  tags: ["asterisk"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-asterisk","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13 3v7.267l6.294-3.633 1 1.732-6.293 3.633 6.293 3.635-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634-1-1.732L9.999 12 3.706 8.366l1-1.732L11 10.267V3z'/>    </g>"},
    )
  }
}