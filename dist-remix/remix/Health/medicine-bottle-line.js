import { h } from 'vue'
export default {
  $_icon: {
    name: "MedicineBottleLine",
    vendor: "Rx",
    type: "",
    tags: ["medicine","bottle","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-medicine-bottle-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M19 2v2h-2v3c1.657 0 3 1.343 3 3v11c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V10c0-1.657 1.343-3 3-3V4H5V2h14zm-2 7H7c-.552 0-1 .448-1 1v10h12V10c0-.552-.448-1-1-1zm-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v3h6V4z'/>    </g>"},
    )
  }
}