import { h } from 'vue'
export default {
  $_icon: {
    name: "Label",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["label"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z"}
        ) 
      ]
    )
  }
}