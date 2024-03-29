import { h } from 'vue'
export default {
  $_icon: {
    name: "LocationExit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["location","exit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 12L18 8V11H10V13H18V16M20 18A10 10 0 1 1 20 6H17.27A8 8 0 1 0 17.27 18Z"}
        ) 
      ]
    )
  }
}