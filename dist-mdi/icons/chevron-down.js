import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chevron","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
        ) 
      ]
    )
  }
}