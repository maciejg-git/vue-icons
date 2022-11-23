import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarTextOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","text","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M5 7V5H19V7H5M7 11H17V13H7V11M7 15H14V17H7V15Z"}
        ) 
      ]
    )
  }
}