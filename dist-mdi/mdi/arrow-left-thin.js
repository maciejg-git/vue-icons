import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftThin",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-left-thin"},
      [ 
        h(
          "path",
          {"d":"M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z"}
        ) 
      ]
    )
  }
}