import { h } from 'vue'
export default {
  $_icon: {
    name: "TicketSimple",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["ticket","simple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64v80c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V304c26.5 0 48-21.5 48-48s-21.5-48-48-48V128z"}
        ) 
      ]
    )
  }
}