import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopLeftThin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","left","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12.07 5L9.24 7.83L19 17.59L17.58 19L7.82 9.25L5 12.07V5Z"}
        ) 
      ]
    )
  }
}