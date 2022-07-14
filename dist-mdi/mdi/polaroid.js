import { h } from 'vue'
export default {
  $_icon: {
    name: "Polaroid",
    vendor: "Mdi",
    type: "",
    tags: ["polaroid"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-polaroid"},
      [ 
        h(
          "path",
          {"d":"M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z"}
        ) 
      ]
    )
  }
}