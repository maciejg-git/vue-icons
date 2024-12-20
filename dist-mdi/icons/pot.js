import { h } from 'vue'
export default {
  $_icon: {
    name: "Pot",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pot"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12H3V10H21V12H19V19Z"}
        ) 
      ]
    )
  }
}