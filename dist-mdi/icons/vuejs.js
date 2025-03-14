import { h } from 'vue'
export default {
  $_icon: {
    name: "Vuejs",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vuejs"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"}
        ) 
      ]
    )
  }
}