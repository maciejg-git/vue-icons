import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
        ) 
      ]
    )
  }
}