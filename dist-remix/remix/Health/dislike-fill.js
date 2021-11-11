import { h } from 'vue'
export default {
  name: "DislikeFill",
  vendor: "Rx",
  type: "",
  tags: ["dislike","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-dislike-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M2.808 1.393l18.384 18.385-1.414 1.414-3.747-3.747L12 21.485 3.52 12.993c-2.04-2.284-2.028-5.753.034-8.023L1.393 2.808l1.415-1.415zm17.435 3.364c2.262 2.268 2.34 5.88.236 8.236l-1.635 1.636L7.26 3.046c1.67-.207 3.408.288 4.741 1.483 2.349-2.109 5.979-2.039 8.242.228z'/>    </g>"},
    )
  }
}