import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphabetAurebesh",
    vendor: "Mdi",
    type: "",
    tags: ["alphabet","aurebesh"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alphabet-aurebesh"},
      [ 
        h(
          "path",
          {"d":"M3 4V11H14.23L22 4H19L13.46 9H5V4H3M3 13V20H5V15H13.46L19 20H22L14.23 13H3Z"}
        ) 
      ]
    )
  }
}