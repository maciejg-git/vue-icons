import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric9",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","9"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z"}
        ) 
      ]
    )
  }
}