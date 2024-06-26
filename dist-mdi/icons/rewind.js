import { h } from 'vue'
export default {
  $_icon: {
    name: "Rewind",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["rewind"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z"}
        ) 
      ]
    )
  }
}