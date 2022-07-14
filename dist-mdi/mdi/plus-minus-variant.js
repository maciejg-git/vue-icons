import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusMinusVariant",
    vendor: "Mdi",
    type: "",
    tags: ["plus","minus","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-plus-minus-variant"},
      [ 
        h(
          "path",
          {"d":"M3 7H6V4H8V7H11V9H8V12H6V9H3V7M13 15H21V17H13V15M16.04 3H18.35L7.96 21H5.65L16.04 3Z"}
        ) 
      ]
    )
  }
}