import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignVerticalCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","vertical","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 11H17V6H14V11H10V3H7V11H1.8V13H7V21H10V13H14V18H17V13H22V11Z"}
        ) 
      ]
    )
  }
}