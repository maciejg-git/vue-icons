import { h } from 'vue'
export default {
  name: "LuggageDepositLine",
  vendor: "Rx",
  type: "",
  tags: ["luggage","deposit","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-luggage-deposit-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M15 3c.552 0 1 .448 1 1v2h4c.552 0 1 .448 1 1v12h2v2H1v-2h2V7c0-.552.448-1 1-1h4V4c0-.552.448-1 1-1h6zM8 8H5v11h3V8zm6 0h-4v11h4V8zm5 0h-3v11h3V8zm-5-3h-4v1h4V5z'/>    </g>"},
    )
  }
}