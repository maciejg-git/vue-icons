import { h } from 'vue'
export default {
  $_icon: {
    name: "Mailbox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["mailbox"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,4H7A5,5 0 0,0 2,9V20H20A2,2 0 0,0 22,18V9A5,5 0 0,0 17,4M10,18H4V9A3,3 0 0,1 7,6A3,3 0 0,1 10,9V18M19,15H17V13H13V11H19V15M9,11H5V9H9V11Z"}
        ) 
      ]
    )
  }
}