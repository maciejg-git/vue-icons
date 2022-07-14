import { h } from 'vue'
export default {
  $_icon: {
    name: "ManatSign",
    vendor: "Fa",
    type: "Solid",
    tags: ["manat","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-manat-sign"},
      [ 
        h(
          "path",
          {"d":"M224 64V98.65C314.8 113.9 384 192.9 384 288V448C384 465.7 369.7 480 352 480C334.3 480 320 465.7 320 448V288C320 228.4 279.2 178.2 224 164V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V164C104.8 178.2 64 228.4 64 288V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V288C0 192.9 69.19 113.9 160 98.65V64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64z"}
        ) 
      ]
    )
  }
}