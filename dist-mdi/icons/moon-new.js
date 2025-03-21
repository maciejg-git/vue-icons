import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonNew",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["moon","new"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z"}
        ) 
      ]
    )
  }
}