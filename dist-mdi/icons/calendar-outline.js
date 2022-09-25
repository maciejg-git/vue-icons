import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-outline"},
      [ 
        h(
          "path",
          {"d":"M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8M12,13H17V18H12V13Z"}
        ) 
      ]
    )
  }
}