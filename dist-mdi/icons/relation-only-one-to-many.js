import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOnlyOneToMany",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["relation","only","one","to","many"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 13V19H21L19 17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H19L21 13Z"}
        ) 
      ]
    )
  }
}