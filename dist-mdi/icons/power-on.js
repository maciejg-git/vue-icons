import { h } from 'vue'
export default {
  $_icon: {
    name: "PowerOn",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["power","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,3H13V21H11V3Z"}
        ) 
      ]
    )
  }
}