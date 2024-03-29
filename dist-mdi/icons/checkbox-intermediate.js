import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckboxIntermediate",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["checkbox","intermediate"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z"}
        ) 
      ]
    )
  }
}