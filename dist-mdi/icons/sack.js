import { h } from 'vue'
export default {
  $_icon: {
    name: "Sack",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sack"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,9C20,11 21,18 21,18C21,18 22,22 16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9M14,4L12,2L10,4L6,2L8,7H16L18,2L14,4Z"}
        ) 
      ]
    )
  }
}