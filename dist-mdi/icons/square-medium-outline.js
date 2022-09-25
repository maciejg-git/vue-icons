import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMediumOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","medium","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-square-medium-outline"},
      [ 
        h(
          "path",
          {"d":"M14,10V14H10V10H14M16,8H8V16H16V8Z"}
        ) 
      ]
    )
  }
}