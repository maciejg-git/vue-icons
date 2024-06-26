import { h } from 'vue'
export default {
  $_icon: {
    name: "Plus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
        ) 
      ]
    )
  }
}