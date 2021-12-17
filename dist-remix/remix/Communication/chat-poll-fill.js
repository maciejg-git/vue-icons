import { h } from 'vue'
export default {
  name: "ChatPollFill",
  vendor: "Rx",
  type: "",
  tags: ["chat","poll","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-chat-poll-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M21 3c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H6.455L2 22.5V4c0-.552.448-1 1-1h18zm-8 4h-2v8h2V7zm4 2h-2v6h2V9zm-8 2H7v4h2v-4z'/>    </g>"},
    )
  }
}