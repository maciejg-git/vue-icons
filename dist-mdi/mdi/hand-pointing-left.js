import { h } from 'vue'
export default {
  $_icon: {
    name: "HandPointingLeft",
    vendor: "Mdi",
    type: "",
    tags: ["hand","pointing","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-hand-pointing-left"},
      [ 
        h(
          "path",
          {"d":"M3,9H13L11.31,5.8L11.28,5.58C11.28,5.29 11.4,5.03 11.6,4.84L12.37,4.1L16.57,9C16.84,9.26 17,9.61 17,10V16.5C17,17.27 16.3,18 15.5,18H11.14C10.53,18 10,17.65 9.8,17.15L7.6,12.21L7.47,11H3A1,1 0 0,1 2,10A1,1 0 0,1 3,9M19,18V10H22V18H19Z"}
        ) 
      ]
    )
  }
}