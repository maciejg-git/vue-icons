import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTextWrappingClip",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","text","wrapping","clip"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,21H5V3H7V21M17,3V11H9V13H17V21H19V3H17Z"}
        ) 
      ]
    )
  }
}