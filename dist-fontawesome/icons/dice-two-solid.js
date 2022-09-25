import { h } from 'vue'
export default {
  $_icon: {
    name: "DiceTwo",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["dice","two"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-dice-two"},
      [ 
        h(
          "path",
          {"d":"M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.62 419.4 32 384 32zM128 192C110.4 192 96 177.6 96 160s14.38-32 32-32s32 14.38 32 32S145.6 192 128 192zM320 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 384 320 384z"}
        ) 
      ]
    )
  }
}