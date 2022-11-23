import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"}
        ) 
      ]
    )
  }
}