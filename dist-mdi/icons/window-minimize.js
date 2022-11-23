import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,14H4V10H20"}
        ) 
      ]
    )
  }
}