import { h } from 'vue'
export default {
  $_icon: {
    name: "FrancSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["franc","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M80 32C62.3 32 48 46.3 48 64l0 160 0 96-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0-64 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-96 176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"}
        ) 
      ]
    )
  }
}