import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationManyToOne",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["relation","many","to","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 15V17H19V19H17V17H11V9H5L3 11H2V5H3L5 7H13V15H17V13H19V15Z"}
        ) 
      ]
    )
  }
}