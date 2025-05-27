import { h } from 'vue'
export default {
  $_icon: {
    name: "Flash",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,2V13H10V22L17,10H13L17,2H7Z"}
        ) 
      ]
    )
  }
}