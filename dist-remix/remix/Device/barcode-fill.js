import { h } from 'vue'
export default {
  name: "BarcodeFill",
  vendor: "Rx",
  type: "",
  tags: ["barcode","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-barcode-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M2 4h2v16H2V4zm4 0h2v16H6V4zm3 0h3v16H9V4zm4 0h2v16h-2V4zm3 0h2v16h-2V4zm3 0h3v16h-3V4z'/>    </g>"},
    )
  }
}