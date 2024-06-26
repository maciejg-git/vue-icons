import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatVerticalAlignTop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","vertical","align","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z"}
        ) 
      ]
    )
  }
}