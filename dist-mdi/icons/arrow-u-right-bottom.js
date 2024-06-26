import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowURightBottom",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","u","right","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 16L14.5 21.5L13.08 20.09L16.17 17H10.5C6.91 17 4 14.09 4 10.5S6.91 4 10.5 4H18V6H10.5C8 6 6 8 6 10.5S8 15 10.5 15H16.17L13.09 11.91L14.5 10.5L20 16Z"}
        ) 
      ]
    )
  }
}