import { h } from 'vue'
export default {
  $_icon: {
    name: "MessagePlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z"}
        ) 
      ]
    )
  }
}