import { h } from 'vue'
export default {
  $_icon: {
    name: "WallSconce",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["wall","sconce"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,4L7,13H19L15,4H11M4,14V22H6V19H14V14H12V17H6V14H4Z"}
        ) 
      ]
    )
  }
}