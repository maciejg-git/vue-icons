import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTextVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","text","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.6,14L12,7.7L14.4,14M11,5L5.5,19H7.7L8.8,16H15L16.1,19H18.3L13,5H11Z"}
        ) 
      ]
    )
  }
}