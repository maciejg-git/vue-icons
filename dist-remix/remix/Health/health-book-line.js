import { h } from 'vue'
export default {
  name: "HealthBookLine",
  vendor: "Rx",
  tags: ["health","book","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-health-book-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M20 2c.552 0 1 .448 1 1v18c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3c0-.552.448-1 1-1h14zm-1 2H7v16h12V4zm-5 4v3h3v2h-3.001L14 16h-2l-.001-3H9v-2h3V8h2z'/>    </g>"},
    )
  }
}