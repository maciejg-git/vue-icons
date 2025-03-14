import { h } from 'vue'
export default {
  $_icon: {
    name: "EthernetCable",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ethernet","cable"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,3V7H13V3H11M8,4V11H16V4H14V8H10V4H8M10,12V22H14V12H10Z"}
        ) 
      ]
    )
  }
}