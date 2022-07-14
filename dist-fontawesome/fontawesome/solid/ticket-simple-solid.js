import { h } from 'vue'
export default {
  $_icon: {
    name: "TicketSimple",
    vendor: "Fa",
    type: "Solid",
    tags: ["ticket","simple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-ticket-simple"},
      [ 
        h(
          "path",
          {"d":"M0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128z"}
        ) 
      ]
    )
  }
}