import { h } from 'vue'
export default {
  $_icon: {
    name: "DistributeVerticalTop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["distribute","vertical","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 21H7V16H2V14H22V16H17V21M22 5V3H2V5H5V10H19V5H22Z"}
        ) 
      ]
    )
  }
}