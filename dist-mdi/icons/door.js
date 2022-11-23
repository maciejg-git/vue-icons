import { h } from 'vue'
export default {
  $_icon: {
    name: "Door",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["door"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z"}
        ) 
      ]
    )
  }
}