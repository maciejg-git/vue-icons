import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-multiple"},
      [ 
        h(
          "path",
          {"d":"M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21M19,15H15V11H19V15Z"}
        ) 
      ]
    )
  }
}