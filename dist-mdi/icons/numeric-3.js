import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric3",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","3"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15"}
        ) 
      ]
    )
  }
}