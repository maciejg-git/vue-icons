import { h } from 'vue'
export default {
  name: "ArrowLeftRightLine",
  vendor: "Rx",
  type: "",
  tags: ["arrow","left","right","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-arrow-left-right-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z'/>    </g>"},
    )
  }
}