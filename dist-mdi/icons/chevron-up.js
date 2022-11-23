import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}
        ) 
      ]
    )
  }
}