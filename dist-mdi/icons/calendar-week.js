import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarWeek",
    vendor: "Mdi",
    type: [],
    tags: ["calendar","week"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-week"},
      [ 
        h(
          "path",
          {"d":"M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z"}
        ) 
      ]
    )
  }
}