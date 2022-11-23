import { h } from 'vue'
export default {
  $_icon: {
    name: "Bowl",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bowl"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 15C22 18.9 18.9 22 15 22H9C5.1 22 2 18.9 2 15V12H22V15Z"}
        ) 
      ]
    )
  }
}