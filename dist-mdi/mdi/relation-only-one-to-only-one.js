import { h } from 'vue'
export default {
  $_icon: {
    name: "RelationOnlyOneToOnlyOne",
    vendor: "Mdi",
    type: "",
    tags: ["relation","only","one","to","only","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-relation-only-one-to-only-one"},
      [ 
        h(
          "path",
          {"d":"M22 15V17H21V19H19V17H18V19H16V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H16V13H18V15H19V13H21V15Z"}
        ) 
      ]
    )
  }
}