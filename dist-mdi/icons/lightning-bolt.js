import { h } from 'vue'
export default {
  $_icon: {
    name: "LightningBolt",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["lightning","bolt"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 15H6L13 1V9H18L11 23V15Z"}
        ) 
      ]
    )
  }
}