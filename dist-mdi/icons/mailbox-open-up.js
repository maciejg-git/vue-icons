import { h } from 'vue'
export default {
  $_icon: {
    name: "MailboxOpenUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["mailbox","open","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,4A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4H8M8,6A3,3 0 0,1 11,9V18H5V9A3,3 0 0,1 8,6M13,13V7H17V9H15V13H13Z"}
        ) 
      ]
    )
  }
}