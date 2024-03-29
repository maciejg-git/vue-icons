import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["archive","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 4H18V7H2V4M3 8H17V20H3V8M7.5 11C7.22 11 7 11.22 7 11.5V13H13V11.5C13 11.22 12.78 11 12.5 11H7.5M20 13V7H22V13H20M20 17V15H22V17H20Z"}
        ) 
      ]
    )
  }
}