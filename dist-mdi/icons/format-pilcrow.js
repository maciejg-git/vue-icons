import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatPilcrow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","pilcrow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,11A4,4 0 0,1 6,7A4,4 0 0,1 10,3H18V5H16V21H14V5H12V21H10V11Z"}
        ) 
      ]
    )
  }
}