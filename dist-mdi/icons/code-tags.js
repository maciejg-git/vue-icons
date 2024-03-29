import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeTags",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["code","tags"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"}
        ) 
      ]
    )
  }
}