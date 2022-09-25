import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric6Box",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","6","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-6-box"},
      [ 
        h(
          "path",
          {"d":"M15,9H11V11H13A2,2 0 0,1 15,13V15C15,16.11 14.1,17 13,17H11A2,2 0 0,1 9,15V9C9,7.89 9.9,7 11,7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H13V13H11V15Z"}
        ) 
      ]
    )
  }
}