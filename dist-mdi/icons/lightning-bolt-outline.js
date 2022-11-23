import { h } from 'vue'
export default {
  $_icon: {
    name: "LightningBoltOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["lightning","bolt","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z"}
        ) 
      ]
    )
  }
}