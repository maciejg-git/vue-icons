import { h } from 'vue'
export default {
  $_icon: {
    name: "FileUpload",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","upload"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z"}
        ) 
      ]
    )
  }
}