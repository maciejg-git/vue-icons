import { h } from 'vue'
export default {
  $_icon: {
    name: "HospitalBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["hospital","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
        ) 
      ]
    )
  }
}