import { h } from 'vue'
export default {
  name: "SimCardLine",
  vendor: "Rx",
  type: "",
  tags: ["sim","card","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-sim-card-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 10h8v6H8v-6z'/>    </g>"},
    )
  }
}