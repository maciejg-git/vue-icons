import { h } from 'vue'
export default {
  $_icon: {
    name: "Card",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["card"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20Z"}
        ) 
      ]
    )
  }
}