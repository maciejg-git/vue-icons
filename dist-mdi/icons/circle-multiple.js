import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["circle","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"}
        ) 
      ]
    )
  }
}