import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckUnderlineCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["check","underline","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,18H7V16H17V18M10.3,14L7,10.7L8.4,9.3L10.3,11.2L15.6,5.9L17,7.3L10.3,14Z"}
        ) 
      ]
    )
  }
}