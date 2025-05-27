import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignVerticalDistribute",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","vertical","distribute"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 2V4H2V2H22M7 10.5V13.5H17V10.5H7M2 20V22H22V20H2Z"}
        ) 
      ]
    )
  }
}