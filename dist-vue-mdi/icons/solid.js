import { h } from 'vue'
export default {
  $_icon: {
    name: "Solid",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["solid"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0,0H24V24H0"}
        ) 
      ]
    )
  }
}