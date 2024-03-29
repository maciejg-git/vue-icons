import { h } from 'vue'
export default {
  $_icon: {
    name: "BookVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["book","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z"}
        ) 
      ]
    )
  }
}