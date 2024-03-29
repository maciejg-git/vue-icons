import { h } from 'vue'
export default {
  $_icon: {
    name: "DistributeVerticalCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["distribute","vertical","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 16H5V14H19V16H22V18H19V20H5V18H2V16M2 8H7V10H17V8H22V6H17V4H7V6H2V8Z"}
        ) 
      ]
    )
  }
}