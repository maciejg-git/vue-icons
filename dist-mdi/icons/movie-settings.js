import { h } from 'vue'
export default {
  $_icon: {
    name: "MovieSettings",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["movie","settings"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 4V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z"}
        ) 
      ]
    )
  }
}