import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarEnd",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","end"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-end"},
      [ 
        h(
          "path",
          {"d":"M22 14V22H20V18L16 22V19H11V17H16V14L20 18V14H22M5 19L9 19V21L5 21C3.9 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V.998H8V3H16V.998H18V3H19C20.11 3 21 3.89 21 5L21 12H19V8H5V19Z"}
        ) 
      ]
    )
  }
}