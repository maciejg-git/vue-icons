import { h } from 'vue'
export default {
  $_icon: {
    name: "OctagramPlusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["octagram","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2.2 16.06L3.88 12L2.2 7.94L6.26 6.26L7.94 2.2L12 3.88L16.06 2.2L17.74 6.26L21.8 7.94L20.12 12L20.63 13.22C20.11 13.08 19.56 13 19 13C18.79 13 18.58 13 18.38 13.03L17.95 12L19.19 9L16.21 7.79L15 4.81L12 6.05L9 4.81L7.79 7.79L4.81 9L6.05 12L4.81 15L7.79 16.21L9 19.19L12 17.95L13.03 18.38C13 18.58 13 18.79 13 19C13 19.56 13.08 20.11 13.22 20.63L12 20.12L7.94 21.8L6.26 17.74L2.2 16.06M20 20H23V18H20V15H18V18H15V20H18V23H20V20Z"}
        ) 
      ]
    )
  }
}