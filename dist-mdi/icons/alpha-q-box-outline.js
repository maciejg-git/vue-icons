import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaQBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","q","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,4H19A2,2 0 0,1 21,6V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V6A2,2 0 0,1 5,4M5,6V20H19V6H5M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z"}
        ) 
      ]
    )
  }
}