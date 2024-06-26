import { h } from 'vue'
export default {
  $_icon: {
    name: "LampOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["lamp","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14.56 4L17.23 12H6.78L9.44 4H14.56M16 2H8L4 14H20L16 2M11 15H13V20H18V22H6V20H11V15Z"}
        ) 
      ]
    )
  }
}