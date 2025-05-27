import { h } from 'vue'
export default {
  $_icon: {
    name: "NearMe",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["near","me"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z"}
        ) 
      ]
    )
  }
}