import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonFirstQuarter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["moon","first","quarter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2V22A10 10 0 0 0 12 2Z"}
        ) 
      ]
    )
  }
}