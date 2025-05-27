import { h } from 'vue'
export default {
  $_icon: {
    name: "UnfoldMoreHorizontal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["unfold","more","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}
        ) 
      ]
    )
  }
}