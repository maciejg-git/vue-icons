import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalf",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["circle","half"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22V2Z"}
        ) 
      ]
    )
  }
}