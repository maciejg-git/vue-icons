import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOneToOnlyOne",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["relation","one","to","only","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 15V17H21V19H19V17H18V19H16V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H16V13H18V15H19V13H21V15Z"}
        ) 
      ]
    )
  }
}