import { h } from 'vue'
export default {
  $_icon: {
    name: "Record",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["record"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,12C19,15.86 15.86,19 12,19C8.14,19 5,15.86 5,12C5,8.14 8.14,5 12,5C15.86,5 19,8.14 19,12Z"}
        ) 
      ]
    )
  }
}