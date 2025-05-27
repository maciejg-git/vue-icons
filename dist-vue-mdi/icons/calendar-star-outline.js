import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarStarOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","star","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7M11 13H7.8L10.4 15L9.4 18L12 16.2L14.6 18L13.6 15L16.2 13H13L12 10L11 13Z"}
        ) 
      ]
    )
  }
}