import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorDifference",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","difference"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H5V14H3V3H14V5H16V3C16,1.89 15.11,1 14,1H3M9,7C7.89,7 7,7.89 7,9V11H9V9H11V7H9M13,7V9H14V10H16V7H13M18,7V9H20V20H9V18H7V20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7H18M14,12V14H12V16H14C15.11,16 16,15.11 16,14V12H14M7,13V16H10V14H9V13H7Z"}
        ) 
      ]
    )
  }
}