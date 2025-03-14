import { h } from 'vue'
export default {
  $_icon: {
    name: "LabelVariantOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["label","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6.5,17H15L18.5,12L15,7H6.5L10,12L6.5,17M15,19H3L7.5,12L3,5H15C15.69,5 16.23,5.3 16.64,5.86L21,12L16.64,18.14C16.23,18.7 15.69,19 15,19Z"}
        ) 
      ]
    )
  }
}