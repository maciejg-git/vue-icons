import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonFull",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["moon","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z"}
        ) 
      ]
    )
  }
}