import { h } from 'vue'
export default {
  $_icon: {
    name: "ProjectorScreenVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["projector","screen","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 18V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19Z"}
        ) 
      ]
    )
  }
}