import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuSwap",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","swap"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z"}
        ) 
      ]
    )
  }
}