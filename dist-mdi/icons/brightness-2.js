import { h } from 'vue'
export default {
  $_icon: {
    name: "Brightness2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["brightness","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-brightness-2"},
      [ 
        h(
          "path",
          {"d":"M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z"}
        ) 
      ]
    )
  }
}