import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewGridPlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","grid","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 3V11H21V3H13M3 21H11V13H3V21M3 3V11H11V3H3M13 16H16V13H18V16H21V18H18V21H16V18H13V16Z"}
        ) 
      ]
    )
  }
}