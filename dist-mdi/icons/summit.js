import { h } from 'vue'
export default {
  $_icon: {
    name: "Summit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["summit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,3H17L22,5L17,7V10.17L22,21H2L8,13L11.5,17.7L15,10.17V3Z"}
        ) 
      ]
    )
  }
}