import { h } from 'vue'
export default {
  $_icon: {
    name: "Pentagon",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pentagon"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z"}
        ) 
      ]
    )
  }
}