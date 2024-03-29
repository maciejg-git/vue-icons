import { h } from 'vue'
export default {
  $_icon: {
    name: "ExpansionCardVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["expansion","card","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 7H4.5V17H3V8.5H2M22 7V16H14V17H7V16H6V7M10 9H8V12H10M13 9H11V12H13M20 9H15V14H20V9Z"}
        ) 
      ]
    )
  }
}