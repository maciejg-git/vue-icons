import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalfFull",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["circle","half","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-circle-half-full"},
      [ 
        h(
          "path",
          {"d":"M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"}
        ) 
      ]
    )
  }
}