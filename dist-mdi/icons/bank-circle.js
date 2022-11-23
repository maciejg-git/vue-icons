import { h } from 'vue'
export default {
  $_icon: {
    name: "BankCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bank","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M17 17H7V15H17V17M8 14V11H10V14H8M11 14V11H13V14H11M14 14V11H16V14H14M17 10H7V8.5L12 6L17 8.5V10Z"}
        ) 
      ]
    )
  }
}