import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuRightOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","right","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z"}
        ) 
      ]
    )
  }
}