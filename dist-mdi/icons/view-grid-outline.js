import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewGridOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","grid","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"}
        ) 
      ]
    )
  }
}