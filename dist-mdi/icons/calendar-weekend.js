import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarWeekend",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","weekend"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 19V8H5V19H19M16 1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1M7 17V10H9V17H7M15 10H17V17H15V10Z"}
        ) 
      ]
    )
  }
}