import { h } from 'vue'
export default {
  $_icon: {
    name: "ChatQuoteFill",
    vendor: "Rx",
    type: "",
    tags: ["chat","quote","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-chat-quote-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M21 3c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H6.455L2 22.5V4c0-.552.448-1 1-1h18zM10.962 8.1l-.447-.688C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589.966 0 1.75-.784 1.75-1.75 0-.92-.711-1.661-1.614-1.745-.16-.015-.324-.012-.479.01v-.092c.006-.422.092-1.633 1.454-2.466l.185-.107-.447-.688zm4.553-.688c-1.787.775-3.015 2.343-3.015 4.093 0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589.966 0 1.75-.784 1.75-1.75 0-.92-.711-1.661-1.614-1.745-.16-.015-.324-.012-.479.01 0-.313-.029-1.762 1.639-2.665z'/>    </g>"},
    )
  }
}