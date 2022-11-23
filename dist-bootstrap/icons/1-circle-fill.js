import { h } from 'vue'
export default {
  $_icon: {
    name: "1CircleFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["1","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"}
        ) 
      ]
    )
  }
}