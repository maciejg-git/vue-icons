import { h } from 'vue'
export default {
  $_icon: {
    name: "CardMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["card","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-card-multiple"},
      [ 
        h(
          "path",
          {"d":"M21 3C21.53 3 22.04 3.21 22.41 3.59C22.79 3.96 23 4.47 23 5V15C23 15.53 22.79 16.04 22.41 16.41C22.04 16.79 21.53 17 21 17H7C6.47 17 5.96 16.79 5.59 16.41C5.21 16.04 5 15.53 5 15V5C5 4.47 5.21 3.96 5.59 3.59C5.96 3.21 6.47 3 7 3H21M3 19H18V21H3C2.47 21 1.96 20.79 1.59 20.41C1.21 20.04 1 19.53 1 19V8H3V19Z"}
        ) 
      ]
    )
  }
}