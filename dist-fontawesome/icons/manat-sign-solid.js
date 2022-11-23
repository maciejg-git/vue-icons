import { h } from 'vue'
export default {
  $_icon: {
    name: "ManatSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["manat","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M192 32c-17.7 0-32 14.3-32 32V98.7C69.2 113.9 0 192.9 0 288V448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-59.6 40.8-109.8 96-124V448c0 17.7 14.3 32 32 32s32-14.3 32-32V164c55.2 14.2 96 64.3 96 124V448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-95.1-69.2-174.1-160-189.3V64c0-17.7-14.3-32-32-32z"}
        ) 
      ]
    )
  }
}