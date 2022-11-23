import { h } from 'vue'
export default {
  $_icon: {
    name: "FridgeOffOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fridge","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22.11 21.46L2.39 1.73L1.11 3L5 6.89V19C5 20.11 5.9 21 7 21V22H9V21H15V22H17V21C17.58 21 18.1 20.75 18.46 20.35L20.84 22.73L22.11 21.46M17 19H7V11H9.11L17 18.89V19M7.2 4L5.7 2.5C6.05 2.19 6.5 2 7 2H17C18.11 2 19 2.9 19 4V15.8L17 13.8V11H14.2L12.2 9H17V4H7.2M8 12H10V15H8V12Z"}
        ) 
      ]
    )
  }
}