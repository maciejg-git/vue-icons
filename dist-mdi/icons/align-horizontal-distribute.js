import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignHorizontalDistribute",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","horizontal","distribute"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 22H2V2H4V22M22 2H20V22H22V2M13.5 7H10.5V17H13.5V7Z"}
        ) 
      ]
    )
  }
}