import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRightThin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","right","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11.93 5L14.76 7.83L5 17.59L6.42 19L16.18 9.25L19 12.07V5H11.93Z"}
        ) 
      ]
    )
  }
}