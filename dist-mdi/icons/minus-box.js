import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["minus","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-minus-box"},
      [ 
        h(
          "path",
          {"d":"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
        ) 
      ]
    )
  }
}