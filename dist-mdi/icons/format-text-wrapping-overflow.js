import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTextWrappingOverflow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","text","wrapping","overflow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,21H5V3H7V21M14,3H12V9H14V3M14,15H12V21H14V15M19,12L16,9V11H9V13H16V15L19,12Z"}
        ) 
      ]
    )
  }
}