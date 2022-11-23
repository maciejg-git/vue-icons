import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,10L12,15L17,10H7Z"}
        ) 
      ]
    )
  }
}