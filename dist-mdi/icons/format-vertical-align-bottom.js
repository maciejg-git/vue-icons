import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatVerticalAlignBottom",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","vertical","align","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z"}
        ) 
      ]
    )
  }
}