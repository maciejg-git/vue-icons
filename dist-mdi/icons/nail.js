import { h } from 'vue'
export default {
  $_icon: {
    name: "Nail",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["nail"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z"}
        ) 
      ]
    )
  }
}