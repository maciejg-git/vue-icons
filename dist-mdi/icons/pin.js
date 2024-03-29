import { h } from 'vue'
export default {
  $_icon: {
    name: "Pin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"}
        ) 
      ]
    )
  }
}