import { h } from 'vue'
export default {
  $_icon: {
    name: "Forward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,8V4L20,12L12,20V16H4V8H12Z"}
        ) 
      ]
    )
  }
}