import { h } from 'vue'
export default {
  $_icon: {
    name: "ParkingBoxLine",
    vendor: "Rx",
    type: "",
    tags: ["parking","box","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-parking-box-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm4 2h3.5a3.5 3.5 0 0 1 0 7H11v3H9V7zm2 2v3h1.5a1.5 1.5 0 0 0 0-3H11z'/>    </g>"},
    )
  }
}