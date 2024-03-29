import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
        ) 
      ]
    )
  }
}