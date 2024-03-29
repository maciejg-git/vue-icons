import { h } from 'vue'
export default {
  $_icon: {
    name: "Cross",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cross"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z"}
        ) 
      ]
    )
  }
}