import { h } from 'vue'
export default {
  $_icon: {
    name: "SortAscending",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sort","ascending"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 17H22L18 21L14 17H17V3H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z"}
        ) 
      ]
    )
  }
}