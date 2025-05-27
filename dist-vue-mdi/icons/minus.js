import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,13H5V11H19V13Z"}
        ) 
      ]
    )
  }
}