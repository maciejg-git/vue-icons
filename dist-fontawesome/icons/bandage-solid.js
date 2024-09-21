import { h } from 'vue'
export default {
  $_icon: {
    name: "Bandage",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["bandage"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M480 416l96 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-96 0 0 320zM448 96L192 96l0 320 256 0 0-320zM64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l96 0 0-320L64 96zM248 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"}
        ) 
      ]
    )
  }
}