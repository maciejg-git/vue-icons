import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarImport",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","import"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 12L8 16H11V22H13V16H16M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H9V19H5V8H19V19H15V21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3Z"}
        ) 
      ]
    )
  }
}