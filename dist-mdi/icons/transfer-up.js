import { h } from 'vue'
export default {
  $_icon: {
    name: "TransferUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["transfer","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,21V19H16V21H8M8,17V15H16V17H8M8,13V11H16V13H8M19,9H5L12,2L19,9Z"}
        ) 
      ]
    )
  }
}