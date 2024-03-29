import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpThin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z"}
        ) 
      ]
    )
  }
}