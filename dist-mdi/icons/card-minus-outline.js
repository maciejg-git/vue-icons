import { h } from 'vue'
export default {
  $_icon: {
    name: "CardMinusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["card","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23 18V20H15V18H23M13.09 18H4V6H20V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.89 21.11 4 20 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19C13 18.66 13.04 18.33 13.09 18Z"}
        ) 
      ]
    )
  }
}