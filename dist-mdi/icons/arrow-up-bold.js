import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"}
        ) 
      ]
    )
  }
}