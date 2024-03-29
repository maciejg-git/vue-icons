import { h } from 'vue'
export default {
  $_icon: {
    name: "Axis",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["axis"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2.61,21L1.61,19.27L11,13.85V3H13V13.85L22.39,19.27L21.39,21L12,15.58L2.61,21Z"}
        ) 
      ]
    )
  }
}