import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSplitVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","split","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"}
        ) 
      ]
    )
  }
}