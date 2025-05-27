import { h } from 'vue'
export default {
  $_icon: {
    name: "DiamondOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["diamond","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,2H6L2,8L12,22L22,8L18,2M4.43,8L7.07,4H16.93L19.57,8L12,18.56L4.43,8Z"}
        ) 
      ]
    )
  }
}