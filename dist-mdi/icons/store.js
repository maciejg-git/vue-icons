import { h } from 'vue'
export default {
  $_icon: {
    name: "Store",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["store"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"}
        ) 
      ]
    )
  }
}