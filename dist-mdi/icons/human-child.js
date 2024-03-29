import { h } from 'vue'
export default {
  $_icon: {
    name: "HumanChild",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["human","child"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z"}
        ) 
      ]
    )
  }
}