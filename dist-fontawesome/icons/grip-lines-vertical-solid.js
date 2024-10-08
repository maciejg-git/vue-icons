import { h } from 'vue'
export default {
  $_icon: {
    name: "GripLinesVertical",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["grip","lines","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384z"}
        ) 
      ]
    )
  }
}