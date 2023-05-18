import { h } from 'vue'
export default {
  $_icon: {
    name: "DiceOne",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["dice","one"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}
        ) 
      ]
    )
  }
}