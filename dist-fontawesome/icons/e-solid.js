import { h } from 'vue'
export default {
  $_icon: {
    name: "E",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["e"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 32C14.3 32 0 46.3 0 64V256 448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"}
        ) 
      ]
    )
  }
}