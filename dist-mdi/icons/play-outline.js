import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["play","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"}
        ) 
      ]
    )
  }
}