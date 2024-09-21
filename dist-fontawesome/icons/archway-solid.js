import { h } from 'vue'
export default {
  $_icon: {
    name: "Archway",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["archway"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 64 0 0-128c0-53 43-96 96-96s96 43 96 96l0 128 64 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-288L32 128l0 288z"}
        ) 
      ]
    )
  }
}