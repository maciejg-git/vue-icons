import { h } from 'vue'
export default {
  $_icon: {
    name: "Navigation",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["navigation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"}
        ) 
      ]
    )
  }
}