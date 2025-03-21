import { h } from 'vue'
export default {
  $_icon: {
    name: "ShapeRectanglePlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shape","rectangle","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"}
        ) 
      ]
    )
  }
}