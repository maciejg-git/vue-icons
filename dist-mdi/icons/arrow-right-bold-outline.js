import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightBoldOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","right","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z"}
        ) 
      ]
    )
  }
}