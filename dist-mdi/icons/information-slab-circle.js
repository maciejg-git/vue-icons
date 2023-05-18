import { h } from 'vue'
export default {
  $_icon: {
    name: "InformationSlabCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["information","slab","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22M11 7H13V9H11V7M14 17H10V15H11V13H10V11H13V15H14V17Z"}
        ) 
      ]
    )
  }
}