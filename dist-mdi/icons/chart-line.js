import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartLine",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"}
        ) 
      ]
    )
  }
}