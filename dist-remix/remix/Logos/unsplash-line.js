import { h } from 'vue'
export default {
  name: "UnsplashLine",
  vendor: "Rx",
  type: "",
  tags: ["unsplash","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-unsplash-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M10 10v4h4v-4h7v11H3V10h7zm-2 2H5v7h14v-7h-3l-.001 4H8v-4zm8-9v6H8V3h8zm-2 2h-4v2h4V5z'/>    </g>"},
    )
  }
}