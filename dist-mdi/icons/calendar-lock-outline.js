import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarLockOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["calendar","lock","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V9H19V11C19.7 11.2 20.4 11.5 21 11.9V5C21 3.9 20.1 3 19 3M19 7H5V5H19V7M20.8 17V15.5C20.8 14.1 19.4 13 18 13S15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17M19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2S19.5 14.7 19.5 15.5V17Z"}
        ) 
      ]
    )
  }
}