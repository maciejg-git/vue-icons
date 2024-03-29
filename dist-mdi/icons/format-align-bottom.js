import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignBottom",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","align","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,9L15.5,6.5L16.92,7.92L12,12.84L7.08,7.92L8.5,6.5L11,9V3H13V9M3,15H21V17H3V15M3,19H13V21H3V19Z"}
        ) 
      ]
    )
  }
}