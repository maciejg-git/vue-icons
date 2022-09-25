import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorRectangle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","rectangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-vector-rectangle"},
      [ 
        h(
          "path",
          {"d":"M2,4H8V6H16V4H22V10H20V14H22V20H16V18H8V20H2V14H4V10H2V4M16,10V8H8V10H6V14H8V16H16V14H18V10H16M4,6V8H6V6H4M18,6V8H20V6H18M4,16V18H6V16H4M18,16V18H20V16H18Z"}
        ) 
      ]
    )
  }
}