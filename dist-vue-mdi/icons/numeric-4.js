import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric4",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V13H13V17H15V7H13V11H11V7H9Z"}
        ) 
      ]
    )
  }
}