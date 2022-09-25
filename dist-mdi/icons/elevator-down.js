import { h } from 'vue'
export default {
  $_icon: {
    name: "ElevatorDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["elevator","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-elevator-down"},
      [ 
        h(
          "path",
          {"d":"M7 10L11 6H8V2H6V6H3L7 10M17 10L13 6H16V2H18V6H21L17 10M7 12H17C18.11 12 19 12.9 19 14V20C19 21.11 18.11 22 17 22H7C5.9 22 5 21.11 5 20V14C5 12.9 5.9 12 7 12M7 14V20H17V14H7Z"}
        ) 
      ]
    )
  }
}