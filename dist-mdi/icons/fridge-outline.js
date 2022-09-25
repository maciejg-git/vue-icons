import { h } from 'vue'
export default {
  $_icon: {
    name: "FridgeOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fridge","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fridge-outline"},
      [ 
        h(
          "path",
          {"d":"M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z"}
        ) 
      ]
    )
  }
}