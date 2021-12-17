import { h } from 'vue'
export default {
  name: "ChatHistoryFill",
  vendor: "Rx",
  type: "",
  tags: ["chat","history","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-chat-history-fill","innerHTML":"    <g>        <path fill='none' d='M0 0L24 0 24 24 0 24z'/>        <path d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.702 0-3.305-.425-4.708-1.175L2 22l1.176-5.29C2.426 15.306 2 13.703 2 12 2 6.477 6.477 2 12 2zm1 5h-2v7h6v-2h-4V7z'/>    </g>"},
    )
  }
}