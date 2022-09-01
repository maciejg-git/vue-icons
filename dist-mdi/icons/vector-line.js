import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorLine",
    vendor: "Mdi",
    type: [],
    tags: ["vector","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-vector-line"},
      [ 
        h(
          "path",
          {"d":"M15,3V7.59L7.59,15H3V21H9V16.42L16.42,9H21V3M17,5H19V7H17M5,17H7V19H5"}
        ) 
      ]
    )
  }
}