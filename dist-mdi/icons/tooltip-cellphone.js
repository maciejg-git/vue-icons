import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipCellphone",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tooltip","cellphone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9 6H15V14H9V6M22 4V16C22 17.11 21.11 18 20 18H16L12 22L8 18H4C2.9 18 2 17.11 2 16V4C2 2.9 2.9 2 4 2H20C21.11 2 22 2.9 22 4M16 5.09C16 4.5 15.5 4 14.86 4H9.14C8.5 4 8 4.5 8 5.09V14.91C8 15.5 8.5 16 9.14 16H14.86C15.5 16 16 15.5 16 14.91V5.09Z"}
        ) 
      ]
    )
  }
}