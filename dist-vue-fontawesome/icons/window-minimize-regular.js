import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z"}
        ) 
      ]
    )
  }
}