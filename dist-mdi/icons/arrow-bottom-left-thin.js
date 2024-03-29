import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomLeftThin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","bottom","left","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12.07 19L9.24 16.18L19 6.42L17.58 5L7.82 14.76L5 11.94V19Z"}
        ) 
      ]
    )
  }
}