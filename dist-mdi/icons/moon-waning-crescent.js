import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonWaningCrescent",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["moon","waning","crescent"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"}
        ) 
      ]
    )
  }
}