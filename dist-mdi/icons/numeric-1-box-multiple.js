import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric1BoxMultiple",
    vendor: "Mdi",
    type: [],
    tags: ["numeric","1","box","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-1-box-multiple"},
      [ 
        h(
          "path",
          {"d":"M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M14,15H16V5H12V7H14V15Z"}
        ) 
      ]
    )
  }
}