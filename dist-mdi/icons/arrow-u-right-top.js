import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowURightTop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","u","right","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z"}
        ) 
      ]
    )
  }
}