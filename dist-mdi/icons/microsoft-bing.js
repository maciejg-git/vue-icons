import { h } from 'vue'
export default {
  $_icon: {
    name: "MicrosoftBing",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["microsoft","bing"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3"}
        ) 
      ]
    )
  }
}