import { h } from 'vue'
export default {
  $_icon: {
    name: "Triforce",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triforce"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z"}
        ) 
      ]
    )
  }
}