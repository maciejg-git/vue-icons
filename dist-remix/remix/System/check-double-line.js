import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckDoubleLine",
    vendor: "Rx",
    type: "",
    tags: ["check","double","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-check-double-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z'/>    </g>"},
    )
  }
}