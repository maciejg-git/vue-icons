import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatQuoteOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","quote","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z"}
        ) 
      ]
    )
  }
}