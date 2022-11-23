import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewParallel",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","parallel"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z"}
        ) 
      ]
    )
  }
}