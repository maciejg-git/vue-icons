import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarMinusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M8 13H16V15H8V13Z"}
        ) 
      ]
    )
  }
}