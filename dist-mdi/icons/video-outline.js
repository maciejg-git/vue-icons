import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["video","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z"}
        ) 
      ]
    )
  }
}