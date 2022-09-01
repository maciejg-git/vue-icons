import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarText",
    vendor: "Mdi",
    type: [],
    tags: ["calendar","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-text"},
      [ 
        h(
          "path",
          {"d":"M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z"}
        ) 
      ]
    )
  }
}