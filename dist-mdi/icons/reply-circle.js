import { h } from 'vue'
export default {
  $_icon: {
    name: "ReplyCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["reply","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2 2 6.5 2 12M5 11L10 6V9C15.06 9.73 17.28 13.33 18 17C16.19 14.43 13.61 13 10 13V16L5 11Z"}
        ) 
      ]
    )
  }
}