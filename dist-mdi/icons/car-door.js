import { h } from 'vue'
export default {
  $_icon: {
    name: "CarDoor",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["car","door"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,14H16V16H19V14M22,21H3V11L11,3H21A1,1 0 0,1 22,4V21M11.83,5L5.83,11H20V5H11.83Z"}
        ) 
      ]
    )
  }
}