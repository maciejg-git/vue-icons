import { h } from 'vue'
export default {
  name: "BatteryChargeLine",
  vendor: "Rx",
  type: "",
  tags: ["battery","charge","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-battery-charge-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4v2zm4.375 0l1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6.625zM21 9h2v6h-2V9zm-9 2h3l-5 8v-6H7l5-8v6z'/>    </g>"},
    )
  }
}