import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderStyle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["border","style"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,21H17V19H15M19,21H21V19H19M7,21H9V19H7M11,21H13V19H11M19,17H21V15H19M19,13H21V11H19M3,3V21H5V5H21V3M19,9H21V7H19"}
        ) 
      ]
    )
  }
}