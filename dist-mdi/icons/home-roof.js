import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeRoof",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","roof"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 16H22L12 7L2 16H5L12 9.69L19 16M7 8.81V7H4V11.5L7 8.81Z"}
        ) 
      ]
    )
  }
}