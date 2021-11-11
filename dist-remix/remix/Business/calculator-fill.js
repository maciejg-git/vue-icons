import { h } from 'vue'
export default {
  name: "CalculatorFill",
  vendor: "Rx",
  type: "",
  tags: ["calculator","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-calculator-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 10v2h2v-2H7zm0 4v2h2v-2H7zm4-4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-4v6h2v-6h-2zM7 6v4h10V6H7z'/>    </g>"},
    )
  }
}